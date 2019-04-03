import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMessage } from './action';
import { ToastContainer, toast } from 'react-toastify';

class Messenger extends Component {

  renderMessages(messages) {
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
              <img className="avatar-rounded" src="rsc/img_avatar.png" alt="Avatar" style={{ width: 200 }} />
            </div>
            <div className="conversation avatar-left">
              {message.text}
            </div>
          </div>
      })
    )
  }

  addMessage() {
    try {
      const { peer } = this.props;
      var newMessage = { text: this.refs.message.value, isHost: true };
      peer.send(this.refs.message.value);
      this.props.addMessage(newMessage);
      this.refs.message.value = '';
    } catch (e) {
      console.log(e);
      this.refs.message.value = '';
      toast("Nie mozesz wysłać wiadomości, najpierw połącz się z kimś.");
    }
  }

  onKeyPress(e) {
   
    if (e.key === 'Enter') {
      e.preventDefault();
      this.addMessage();
    }
  }
  render() {
    const { messages, peer } = this.props;
    return (
      peer.send && <React.Fragment>
        <div className="chat-win">
          {this.renderMessages(messages)}
        </div>

        <div className="msg-send" onKeyPress={(e) => this.onKeyPress(e)}>
          <textarea className="form-control" ref="message" ref="message" placeholder="Twoja wiadomość" rows={2} id="msg-txt-area" defaultValue={""} />
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

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    peer: state.peer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);