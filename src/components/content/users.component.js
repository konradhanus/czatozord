import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectUser, addUser } from './users.actions'

class Users extends Component {
  displayUser(i, e) {
    const user = {
      name: this.refs["user"+i].innerHTML
    };

    this.props.selectUser(user);
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

  addUser() {
    var user = {
      name: this.refs.addUser.value
    }

    this.props.addUser(user);
    this.refs.addUser.value = '';
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
        <div className="new-user">
          <h6 className="title">Nowy użytkownik:</h6>
          <input
            type="text"
            className="form-control"
            placeholder="Wpisz nazwę"
            ref="addUser" />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.addUser()}>
            Dodaj
          </button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectUser, addUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
