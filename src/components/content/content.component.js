import React, { Component } from 'react';

import Video from './video.component';
import Messenger from './messenger.component';
import Users from './users.component';

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
          <Users users={this.props.users} />
        </div>
      </div>
    );
  }
}

export default Content;
