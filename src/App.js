import React, { Component } from 'react';
import './App.css';
import Chat from './containers/Chat';
import Users from './containers/Users';
import { connect } from 'react-redux';
import SignIn from './containers/SignIn';

class App extends Component {
  

  render() {
    return (
      <React.Fragment>
         {this.props.myFirebaseKey?
         <React.Fragment>
         <Chat />
         </React.Fragment>: 
         <div className="container-fluid">
         <SignIn />
         </div>}
       
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

