import React, { Component } from 'react';

import Video from '../Video';
import Messenger from './../../containers/Messenger'
import Users from './../../containers/Users';

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
