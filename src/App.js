import React, { Component } from 'react';
import './App.css';

import Chat from './components/chat.component';

class App extends Component {
    state = {
      users: [
        {
          name: 'Konrad Hanus'
        },
        {
          name: 'Adam Rusnak'
        },
        {
          name: 'Łukasz Kobierski'
        },
        {
          name: 'Jan Różycki'
        }
      ]
    }
  
  render() {
    console.log(this.state.users);
    return (
      <React.Fragment>
        <Chat users={this.state.users}/>
      </React.Fragment>
    );
  }
}

export default App;
