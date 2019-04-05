import React, { Component } from 'react';
import Messenger from './../../containers/Messenger'
import { bindActionCreators } from 'redux';
import { setFirebaseKey } from './../Users/action';
import Users from './../../containers/Users';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import firebase from './../../firebase';
class SignIn extends Component {
  

    constructor(props) {
        super(props);
    
        this.state = {
          firebase: {
            database: firebase.database()
          }
        }
      }

    onKeyPress(e) {

        if (e.key === 'Enter') {
          e.preventDefault();
          this.addUser();
        }
      }

      addUser() {
        var user = {
          name: this.refs.addUser.value,
          status: 'online'
        }
    
        const users = this.state.firebase.database.ref('users');
    
        var newUserKey = users.push(user).key;
        
        this.props.setFirebaseKey(newUserKey);
        
        toast("Cześć, " + this.refs.addUser.value + "!");
        this.refs.addUser.value = '';
      }
    

    render() {
    return (
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
    return bindActionCreators({ setFirebaseKey}, dispatch);
  }

  export default connect(mapStateToProps,mapDispatchToProps)(SignIn);