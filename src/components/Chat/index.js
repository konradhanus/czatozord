import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import Header from './../Header';
import Content from './../Content';
import Footer from './../Footer';

class Chat extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Chat;
