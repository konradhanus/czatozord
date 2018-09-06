import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chat.css';
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import Video from './content/Video.jsx';
import Messanger from './content/Messanger.jsx';






class Chat extends Component {
  render() {
    return (
      <div className="container-fluid">
      <Header />
  <div className="row">
  <Video />
    <div className="col-lg-5">

    </div>
    <div className="col-lg-2">
      <div className="users-title">
        <h6 className="title">Użytkownicy:</h6>
        <input type="text" className="form-control" id="userInput" onkeyup="userFilter()" placeholder="Wpisz nazwę" title="Wpisz coś..." />
      </div>
      <div className="users-win">
        <div className="users-list">
          <ul id="myUL" className="list-group">
            <li className="list-group-item">
              <a href="#">Adam Rusnak</a>
            </li>
            <li className="list-group-item">
              <a href="#">Konrad Hanus</a>
            </li>
            <li className="list-group-item">
              <a href="#">Jan Kowalski</a>
            </li>
            <li className="list-group-item">
              <a href="#">Bill Gates</a>
            </li>
            <li className="list-group-item">
              <a href="#">Adam Rusnak</a>
            </li>
            <li className="list-group-item">
              <a href="#">Konrad Hanus</a>
            </li>
            <li className="list-group-item">
              <a href="#">Jan Kowalski</a>
            </li>
            <li className="list-group-item">
              <a href="#">Bill Gates</a>
            </li>
            <li className="list-group-item">
              <a href="#">Adam Rusnak</a>
            </li>
            <li className="list-group-item">
              <a href="#">Konrad Hanus</a>
            </li>
            <li className="list-group-item">
              <a href="#">Jan Kowalski</a>
            </li>
            <li className="list-group-item">
              <a href="#">Bill Gates</a>
            </li>
            <li className="list-group-item">
              <a href="#">Adam Rusnak</a>
            </li>
            <li className="list-group-item">
              <a href="#">Konrad Hanus</a>
            </li>
            <li className="list-group-item">
              <a href="#">Jan Kowalski</a>
            </li>
            <li className="list-group-item">
              <a href="#">Bill Gates</a>
            </li>
            <li className="list-group-item">
              <a href="#">Adam Rusnak</a>
            </li>
            <li className="list-group-item">
              <a href="#">Konrad Hanus</a>
            </li>
            <li className="list-group-item">
              <a href="#">Jan Kowalski</a>
            </li>
            <li className="list-group-item">
              <a href="#">Bill Gates</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>
    );
  }
}

export default Chat;
