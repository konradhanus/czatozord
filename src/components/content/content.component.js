import React, { Component } from 'react';

import Video from './video.component';
import Messenger from './messenger/messenger.component';
import Users from './users.firebase.component';

class Content extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-5">
          <Video />
        </div>
        <div className="col-lg-5">
          <Messenger />
        </div>
        <div className="col-lg-2">
          <Users />
        </div>
      </div>
    );
  }
}

export default Content;
