import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFirebaseKey, updatePeer } from './users.actions';
import { addMessage } from './messenger/messenger.actions';
import firebase from '../../firebase';
import Peer from 'simple-peer';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myStun: null,
      yourStun: null,
      callingUserKey: null,
      users: {},
      firebase: {
        database: firebase.database()
      }
    }
  }

  componentDidMount() {
    this.state.firebase.database.ref('users').on('value', (snapshot) => {
      const newUsers = snapshot.val();
      this.setState({ users: newUsers });

      if (this.props.myFirebaseKey) {
        const { yourStun } = this.state;
        const { peer } = this.props;

        var myself = newUsers[this.props.myFirebaseKey];
        if (myself.callingUserKey && (!yourStun || myself.callingUserStun.sdp != yourStun.sdp)) {
          this.setState({
            yourStun: myself.callingUserStun,
            callingUserKey: myself.callingUserKey
           });
          peer.signal(myself.callingUserStun);
        }
      }
    });

    this.props.peer.on('signal', stun => {
      const { callingUserKey } = this.state;

      this.setState({ myStun: stun });
      
      var userRef = this.state.firebase.database.ref(`users/${callingUserKey}`);
      userRef.update({
        callingUserStun: stun,
        callingUserKey: this.props.myFirebaseKey
      });
    });

    this.props.peer.on('data', (data) => this.receiveMessage(data, this.props.addMessage));

    this.props.updatePeer(this.props.peer);
  }

  receiveMessage(data, addMessage) {
    let newMessage = {
      text: new TextDecoder("utf-8").decode(data),
      isHost: false 
    }
    addMessage(newMessage);
  }

  connectToUser(userId) {
    const peer = new Peer({
      initiator: true,
      trickle: false
    });

    var userRef = this.state.firebase.database.ref(`users/${userId}`);
    peer.on('signal', stun => {
      this.setState({myStun: stun});
      userRef.update({
        callingUserStun: stun,
        callingUserKey: this.props.myFirebaseKey
      });
    });

    peer.on('data', (data) => this.receiveMessage(data, this.props.addMessage));

    this.props.updatePeer(peer);
  }

  renderUsers() {
    const { users } = this.state;
    const { myFirebaseKey } = this.props;

    return (
      users && Object.keys(users).map((userId) =>
        (<li
          className={"list-group-item " + (myFirebaseKey === userId ? "user-highlight" : "")} 
          key={userId}
          onClick={(e) => this.connectToUser(userId)}>
          {users[userId].name}
        </li>)
      )
    )
  }

  addUser() {
    var user = {
      name: this.refs.addUser.value
    }

    const users = this.state.firebase.database.ref('users');

    var newUserKey = users.push(user).key;
    this.props.setFirebaseKey(newUserKey);

    this.refs.addUser.value = '';
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="users-title">
          <h6 className="title">Użytkownicy:</h6>
        </div>
        <div className="users-win">
          <div className="users-list">
            <ul id="myUL" className="list-group">
              {this.renderUsers()}
            </ul>
          </div>
        </div>
        <div className="new-user">
          <h6 className="title">Nowy użytkownik:</h6>
          <input
            type="text"
            className="form-control"
            placeholder="Wpisz nazwę"
            ref="addUser" />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.addUser()}>
            Dodaj
          </button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myFirebaseKey: state.myFirebaseKey,
    peer: state.peer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setFirebaseKey, updatePeer, addMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
