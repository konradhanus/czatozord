import React, { Component } from 'react';

class Messenger extends Component {
  state = {
    messages: [
      {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque
        sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla
        ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula
        ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit
        magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis.`,
        isHost: false
      },
      {
        text: `Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero
        dui id orci. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula
        ultricies purus, sed posuere libero dui id orci.`,
        isHost: true
      },
      {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque
        sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla
        ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula
        ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit
        magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis.`,
        isHost: false
      }
    ]
  }

  renderMessages (messages) {
    return (
      messages.map((message, i) => {
        return message.isHost
          ?
          <React.Fragment key={i}>
            <div className="conversation conversation-host">
              {message.text}
            </div>
            <div className="brk-line" />
          </React.Fragment>
          :
          <div className="avatar-message-left-client" key={i}>
            <div className="avatar-left">
              <img className="avatar-rounded" src="rsc/img_avatar.png" alt="Avatar" style={{width: 200}} />
            </div>
            <div className="conversation avatar-left">
              {message.text}
            </div>
          </div>
      })
    )
  }

  addMessage() {
    var newMessage = { text: this.refs.message.value, isHost: true };
    
    this.setState(prevState => ({
      messages: [...prevState.messages, newMessage]
    }));

    this.refs.message.value = '';
  }
  render() {
    return (
      <React.Fragment>
        <div className="chat-win">
          {this.renderMessages(this.state.messages)}
        </div>

        <div className="msg-send">
          <textarea className="form-control" ref="message" placeholder="Twoja wiadomość" rows={2} id="msg-txt-area" defaultValue={""} />
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
            <button type="button" className="btn btn-primary" onClick={() => this.addMessage()}>Wyślij wiadomość</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Messenger;
