import React, { Component } from 'react';
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
      <React.Fragment>
        <Chat users={this.state.users}/>
      </React.Fragment>
    );
  }
}

export default App;
