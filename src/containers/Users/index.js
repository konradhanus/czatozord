import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setFirebaseKey, updatePeer } from "./action";
import { addMessage } from "../Messenger/action";
import firebase from "./../../firebase";
import Peer from "simple-peer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myStun: null,
      yourStun: null,
      callingUserKey: null,
      users: {},
      firebase: {
        database: firebase.database()
      },
      myFirebaseKey: null,
      graph: new window.P2PGraph(".torrent-graph"),
      graphNodeAdded: []
    };
  }

  /*
  graph.add({
    id: 'Thing1',
    me: false,
    name: '192.168.1.20'
  })
  graph.add({
    id: 'Thing2',
    me: false,
    name: '192.168.1.44'
  })

  setTimeout(() => {
    graph.connect('You', 'Thing1')
  }, 1000)

  setTimeout(() => {
    graph.rate('You', 'Thing1', 150 * 1000) // 150 KB/s
  }, 2000)

  setTimeout(() => {
    console.log('TODO: choke() - set opacity to 0.5')
    graph.choke('You', 'Thing1')
  }, 8000)

  setTimeout(() => {
    console.log('TODO: unchoke() - get back to default link opacity')
    graph.unchoke('You', 'Thing1')
  }, 9000)

  setTimeout(() => {
    graph.disconnect('You', 'Thing1')
  }, 10000)

  setTimeout(() => {
    graph.remove('Thing1')
  }, 11000)

  setTimeout(() => {
    graph.seed('Thing2', true)
  }, 12000)

*/
  componentDidMount() {
    this.state.firebase.database.ref("users").on("value", snapshot => {
      const newUsers = snapshot.val();

      const { users } = this.state;
      const { myFirebaseKey } = this.props;

      users &&
        Object.keys(users)
          .reverse()
          .map((userId, key) => {
            let newUser = null;
            if (myFirebaseKey !== userId) {
              newUser = {
                id: userId,
                me: false,
                name: users[userId].name
              };
            } else {
              newUser = {
                id: userId,
                me: true,
                name: users[userId].name
              };
            }

            console.log("nowyUser", newUser);
            //pobierz state
            const graphNodeAdded = this.state.graphNodeAdded;

            //sprawdz czy juz nie istnieje
            let ifAdd = true;
            graphNodeAdded.map((node, k) => {
              if (userId === node.id) {
                ifAdd = false;
              }
            });

            if (ifAdd) {
              this.state.graph.add(newUser);
              //dodaj do statu nowy obiekt
              graphNodeAdded.push(newUser);
              console.log(graphNodeAdded);
              this.setState({ graphNodeAdded: graphNodeAdded });
            }
          });

      this.setState({ users: newUsers });

      if (this.props.myFirebaseKey) {
        const { yourStun } = this.state;
        const { peer } = this.props;

        var myself = newUsers[this.props.myFirebaseKey];
        if (
          myself.callingUserKey &&
          (!yourStun || myself.callingUserStun.sdp !== yourStun.sdp)
        ) {
          this.setState({
            yourStun: myself.callingUserStun,
            callingUserKey: myself.callingUserKey
          });
          peer.signal(myself.callingUserStun);
          toast.warning("Dzwonie!");
          try {
            this.state.graph.connect(
              this.props.myFirebaseKey,
              myself.callingUserKey
            );
          } catch (e) {
            console.log("duplikat połaczenia");
          }
        }
      }
    });

    this.props.peer.on("signal", stun => {
      const { callingUserKey } = this.state;

      this.setState({ myStun: stun });

      var userRef = this.state.firebase.database.ref(`users/${callingUserKey}`);
      userRef.update({
        callingUserStun: stun,
        callingUserKey: this.props.myFirebaseKey
      });
    });

    this.props.peer.on("data", data =>
      this.receiveMessage(data, this.props.addMessage)
    );

    this.props.peer.on("connect", () => {
      navigator.getUserMedia(
        { video: true, audio: true },
        stream => {
          this.props.peer.addStream(stream);
        },
        function() {
          console.log("Error");
          toast("Błąd połączenia 1");
        }
      );
    });

    this.props.peer.on("stream", this.playVideo);

    this.props.updatePeer(this.props.peer);
  }

  playVideo(stream) {
    var video = document.querySelector("#video");
    video.srcObject = stream;
    video.play();
    toast("Rozmowa wideo rozpoczęta!");
  }

  receiveMessage(data, addMessage) {
    let newMessage = {
      text: new TextDecoder("utf-8").decode(data),
      isHost: false
    };
    addMessage(newMessage);
    toast("Nowa wiadomość!");
  }

  connectToUser(userId) {
    toast("Uwaga! Uruchamiam kamerę video i mikrofon");
    navigator.getUserMedia(
      { video: true, audio: true },
      stream => {
        toast("Kamera video i mikrofon uruchomione");

        this.state.graph.connect(this.props.myFirebaseKey, userId);

        const peer = new Peer({
          initiator: true,
          trickle: false,
          stream: stream
        });

        var userRef = this.state.firebase.database.ref(`users/${userId}`);
        peer.on("signal", stun => {
          this.setState({ myStun: stun });
          userRef.update({
            callingUserStun: stun,
            callingUserKey: this.props.myFirebaseKey
          });
          toast("Dzwonię");
        });

        peer.on("data", data =>
          this.receiveMessage(data, this.props.addMessage)
        );

        peer.on("stream", this.playVideo);

        this.props.updatePeer(peer);
      },
      function() {
        console.log("Error");
        toast("Błąd połączenia 2");
      }
    );
  }

  renderUsers() {
    const { users } = this.state;
    const { myFirebaseKey } = this.props;

    return (
      users &&
      Object.keys(users)
        .reverse()
        .map((userId, key) => {
          if (key < 8) {
            return (
              <li
                className={
                  "list-group-item " +
                  (myFirebaseKey === userId ? "user-highlight" : "")
                }
                key={userId}
                onClick={e => this.connectToUser(userId)}
              >
                {users[userId].name}
                {users[userId].status === "offline" && (
                  <span class="badge badge-danger">{users[userId].status}</span>
                )}
                {users[userId].status === "online" && (
                  <span class="badge badge-success">
                    {users[userId].status}
                  </span>
                )}
                {users[userId].status === "away" && (
                  <span class="badge badge-warning">
                    {users[userId].status}
                  </span>
                )}
              </li>
            );
          } else {
            return null;
          }
        })
    );
  }

  render() {
    console.log(this.state.graphNodeAdded);
    if (this.props.myFirebaseKey) {
      this.state.firebase.database
        .ref("users/" + this.props.myFirebaseKey)
        .onDisconnect()
        .update({ status: "offline" });
    }

    return (
      <React.Fragment>
        <ToastContainer />
        <React.Fragment>
          <div className="users-title">
            <h6 className="title">Użytkownicy:</h6>
          </div>
          <div className="users-win">
            <div className="users-list">
              <ul id="myUL" className="list-group">
                {this.renderUsers()}
              </ul>
            </div>
          </div>
        </React.Fragment>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    myFirebaseKey: state.myFirebaseKey,
    peer: state.peer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { setFirebaseKey, updatePeer, addMessage },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
