import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Chat from './components/chat.component';

class App extends Component {
  state = {
    users: [
      {
        name: 'Konrad Hanus',
      },
      {
        name: 'Igor Róg'
      },
      {
        name: 'Łukasz Kobierski'
      },
      {
        name: 'Adam Rusnak'
      }
    ]
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Chat users={this.state.users} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
