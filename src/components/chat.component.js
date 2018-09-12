import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import Header from './header/header.component';
import Content from './content/content.component';
import Footer from './footer/footer.component';

class Chat extends Component {
  render() {
    console.log(this.props.users);
    return (
      <div className="container-fluid">
        <Header />
        <Content users={this.props.users}/>
        <Footer />
      </div>
    );
  }
}

export default Chat;
