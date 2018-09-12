import React, { Component } from 'react';

class Users extends Component {
  
  constructor(){
    super();
    this.state = {
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
  }

  showNameOfUser(i, e){
    console.log(e.target.val);
    console.log(e.target.value);
    console.log(this.refs["user"+i].innerHTML);
  }

  renderUsers(users){ 
    return(
    users.map((user, i) => (
    <li className="list-group-item" onClick={(e) => this.showNameOfUser(i, e)}>
        <a href="#" ref={"user"+i}>{user.name}</a>
    </li>
    )));
  }  

  onClickInput(e){
    console.log(e.target.value);
  }

  render() {
    console.log(this.props.users);
    return (

      <React.Fragment>
        <div className="users-title">
          <h6 className="title">Użytkownicy:</h6>
          <input type="text" className="form-control" id="userInput" onChange={(e) => this.onClickInput(e)} onkeyup="userFilter()" placeholder="Wpisz nazwę" title="Wpisz coś..." />
        </div>
        <div className="users-win">
          <div className="users-list">
            <ul id="myUL" className="list-group">
             { this.renderUsers(this.props.users) } 
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Users;
