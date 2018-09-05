import React, { Component } from 'react';

class Users extends Component {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default Users;
