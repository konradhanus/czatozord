import React, { Component } from 'react';
import './App.css';
import Chat from './components/chat.component';
import Users from './components/Users/users.firebase.component';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <React.Fragment>
         {this.props.myFirebaseKey?<Chat />: <div className="container-fluid"><Users /></div>}
       
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myFirebaseKey: state.myFirebaseKey
  }
}


export default connect(mapStateToProps, null)(App);

