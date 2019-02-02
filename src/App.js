import React, { Component } from 'react';
import './App.css';

import Chat from './src/components/chat.component';

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
