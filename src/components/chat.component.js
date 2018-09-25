import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import Header from './header/header.component';
import Content from './content/content.component';
import Footer from './footer/footer.component';

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
