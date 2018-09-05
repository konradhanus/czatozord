import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-brand" href="#">Aplikacja Czat</div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <a className="nav-link" href="#">Strona główna
          <span className="sr-only" />
                            </a>
                            <a className="nav-link" href="#">Czat
          <span className="sr-only" />
                            </a>
                            <a className="nav-link" href="#">Kontakt
          <span className="sr-only" />
                            </a>
                            <a className="nav-link" href="#">Wyloguj
          <span className="sr-only" />
                            </a>
                        </form>
                    </div>
                </nav>
        );
    }
}

export default Menu;