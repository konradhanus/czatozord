import React, { Component } from 'react';

class Messenger extends Component {


  /*constructor(){
    this.state = {
      messages: [{}, ]
    }
  }*/

  render() {
    return (
      <React.Fragment>
        <div className="chat-win">
          <div className="avatar-message-left-client">
            <div className="avatar-left">
              <img className="avatar-rounded" src="rsc/img_avatar.png" alt="Avatar" style={{width: 200}} />
            </div>
            <div className="conversation avatar-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque
              sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla
              ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula
              ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit
              magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis.</div>
          </div>
          <div className="conversation conversation-host">
            Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero
            dui id orci. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula
            ultricies purus, sed posuere libero dui id orci.
          </div>
          <div className="brk-line" />
          <div className="avatar-message-left">
            <div className="avatar-left">
              <img className="avatar-rounded" src="rsc/img_avatar.png" alt="Avatar" style={{width: 200}} />
            </div>
            <div className="conversation avatar-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque
              sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla
              ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula
              ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit
              magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis.</div>
          </div>
        </div>
        <div className="msg-send">
          <textarea className="form-control" placeholder="Twoja wiadomość" rows={2} id="msg-txt-area" defaultValue={""} />
          <div className="btns-misc">
            <button className="btn" data-toggle="tooltip" data-placement="left" title="Wstaw emotikon">
              <i className="fa fa-smile-o" />
            </button>
            <button type="file" className="btn" data-toggle="tooltip" data-placement="bottom" title="Prześlij plik">
              <i className="fa fa-paperclip" />
            </button>
            <button className="btn" data-toggle="tooltip" data-placement="bottom" title="Prześlij lokalizację">
              <i className="fa fa-map-marker" />
            </button>
            <button className="btn" data-toggle="tooltip" data-placement="right" title="Prześlij zdjęcie lub wideo">
              <i className="fa fa-camera" />
            </button>
          </div>
          <div className="btn-send-msg">
            <button type="button" className="btn btn-primary">Wyślij wiadomość</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Messenger;
