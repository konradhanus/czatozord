import React, { Component } from 'react';

class Users extends Component {
  displayUser(i, e) {
    alert(this.refs["user"+i].innerHTML);
  }

  renderUsers(users) {
    return (
      users.map((user,i) =>
        (<li className="list-group-item" key={i} onClick={(e) => this.displayUser(i, e) }>
          <a href="#" ref={"user"+i}>{user.name}</a>
        </li>)
      )
    )
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="users-title">
          <h6 className="title">Użytkownicy:</h6>
          <input type="text" className="form-control" id="userInput" placeholder="Wpisz nazwę" title="Wpisz coś..." />
        </div>
        <div className="users-win">
          <div className="users-list">
            <ul id="myUL" className="list-group">
              {this.renderUsers(this.props.users)}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Users;
