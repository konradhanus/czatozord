import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './chat.style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from './footer.component';
import ListOfUsers from './listofusers.component';
import Messenger from './messenger.component';
import Video from './video.component';

class Chat extends Component {
    render() {
        return (
            <div className="container-fluid">
               <Menu/>
                <div className="row">
                    <Video/>
                    <Messenger/>
                    <ListOfUsers/>
                </div>
                <Footer/>
            </div>
            
        );
    }
}

export default Chat;
