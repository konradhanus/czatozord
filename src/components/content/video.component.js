import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
      <div className="video-win">
        <video width="100%" controls>
          <source src="#" type="video/mp4" />
          <source src="#" type="video/ogg" /> Your browser does not support HTML5 video.
        </video>
        <div>KONTROLKI WIDEO I AUDIO</div>
      </div>
    );
  }
}

export default Video;
