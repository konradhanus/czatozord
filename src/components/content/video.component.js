import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
      <div className="video-win">
        <video width="100%" controls id="video" />
        <div>KONTROLKI WIDEO I AUDIO</div>
      </div>
    );
  }
}

export default Video;
