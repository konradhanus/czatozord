import React, { Component } from 'react';
import './App.css';

import Chat from './components/chat.component';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Chat />
      </React.Fragment>
    );
  }
}

export default App;
