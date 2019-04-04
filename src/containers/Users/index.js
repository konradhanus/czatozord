import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFirebaseKey, updatePeer } from './action';
import { addMessage } from '../Messenger/action';
import firebase from './../../firebase';
import Peer from 'simple-peer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      },
      myFirebaseKey: null
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
        if (myself.callingUserKey && (!yourStun || myself.callingUserStun.sdp !== yourStun.sdp)) {
          this.setState({
            yourStun: myself.callingUserStun,
            callingUserKey: myself.callingUserKey
          });
          peer.signal(myself.callingUserStun);
          toast.warning("Dzwonie!");
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

    this.props.peer.on('connect', () => {
      navigator.getUserMedia({ video: true, audio: true }, (stream) => {
        this.props.peer.addStream(stream)
      }, function () {
        console.log('Error');
        toast("Błąd połączenia 1");
      })
    })

    this.props.peer.on('stream', this.playVideo);

    this.props.updatePeer(this.props.peer);
  }

  playVideo(stream) {
    var video = document.querySelector('#video');
    video.srcObject = stream;
    video.play();
    toast("Rozmowa wideo rozpoczęta!");
  }

  receiveMessage(data, addMessage) {
    let newMessage = {
      text: new TextDecoder("utf-8").decode(data),
      isHost: false
    }
    addMessage(newMessage);
    toast("Nowa wiadomość!");
  }

  connectToUser(userId) {
    toast("Uwaga! Uruchamiam kamerę video i mikrofon");
    navigator.getUserMedia({ video: true, audio: true }, (stream) => {
      toast("Kamera video i mikrofon uruchomione");
      const peer = new Peer({
        initiator: true,
        trickle: false,
        stream: stream
      });

      var userRef = this.state.firebase.database.ref(`users/${userId}`);
      peer.on('signal', stun => {
        this.setState({ myStun: stun });
        userRef.update({
          callingUserStun: stun,
          callingUserKey: this.props.myFirebaseKey
        });
        toast("Dzwonię");
      });

      peer.on('data', (data) => this.receiveMessage(data, this.props.addMessage));

      peer.on('stream', this.playVideo);

      this.props.updatePeer(peer);
    }, function () {
      console.log('Error');
      toast("Błąd połączenia 2");
    })
  }

  renderUsers() {
    const { users } = this.state;
    const { myFirebaseKey } = this.props;

    return (
      users && Object.keys(users).reverse().map((userId, key) => {

        if (key < 8) {
          return (<li
            className={"list-group-item " + (myFirebaseKey === userId ? "user-highlight" : "")}
            key={userId}
            onClick={(e) => this.connectToUser(userId)}>
            {users[userId].name}  
            {users[userId].status === "offline" && <span class="badge badge-danger">{users[userId].status}</span>}
            {users[userId].status === "online" && <span class="badge badge-success">{users[userId].status}</span>}

          </li>)
        } else {
          return null;
        }
      }
      )
    )
  }

  addUser() {
    var user = {
      name: this.refs.addUser.value,
      status: 'online'
    }

    const users = this.state.firebase.database.ref('users');



    var newUserKey = users.push(user).key;
    console.log(newUserKey);
    this.props.setFirebaseKey(newUserKey);




    toast("Cześć, " + this.refs.addUser.value + "!");
    this.refs.addUser.value = '';
  }

  onKeyPress(e) {

    if (e.key === 'Enter') {
      e.preventDefault();
      this.addUser();
    }
  }

  render() {
    console.log('render');
    
      console.log('ahha')
      if(this.props.myFirebaseKey){
        console.log(this.props.myFirebaseKey);
        this.state.firebase.database.ref('users/' + this.props.myFirebaseKey).onDisconnect().update({ status: 'offline' });
      }
   
    return (
      <React.Fragment>
        <ToastContainer />{!this.props.myFirebaseKey &&
          <React.Fragment>
            <div style={{
              position: 'absolute',
              margin: 'auto',
              top: -300,
              right: 0,
              bottom: 0,
              left: 0,
              width: '400px',
              height: '100px'
            }} onKeyPress={(e) => this.onKeyPress(e)}>
              <div className="new-user">
                <h6 className="title">Logowanie</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Podaj swój nick"
                  ref="addUser" />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.addUser()}>

                  Połącz
          </button>
              </div>
            </div>
          </React.Fragment>
        }
        {this.props.myFirebaseKey && <React.Fragment>
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
        </React.Fragment>}

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
