import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { connect } from 'react-redux';

import Header from './../Header';
import Content from './../Content';
import Footer from './../Footer';

import firebase from './../../firebase';


class Chat extends Component {


  constructor(props) {
    super(props);

    this.state = {
      firebase: {
        database: firebase.database()
      }
    }
  }

  componentDidMount() {

    function addEvent(obj, evt, fn) {
      if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
      }
      else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
      }
    }
    addEvent(document, "mouseover", (e) => {
      e = e ? e : window.event;
      var from = e.relatedTarget || e.toElement;
      if (!from || from.nodeName == "HTML") {
        // stop your drag event here
        // for now we can just use an alert

      }
    });

    addEvent(document, "mouseleave", (e) => {
      e = e ? e : window.event;
      var from = e.relatedTarget || e.toElement;
      if (!from || from.nodeName == "HTML") {
        // stop your drag event here
        // for now we can just use an alert
        this.state.firebase.database.ref('users/' + this.props.myFirebaseKey).update({ status: 'away' });
        console.log('mouseleve');
      }
    });


  }

  onMouseEnter() {
    console.log('mouseEnter');
    this.state.firebase.database.ref('users/' + this.props.myFirebaseKey).update({ status: 'online' });
  }


  render() {
    console.log(this.props);
    return (
      <div className="container-fluid max-height" onMouseEnter={()=>this.onMouseEnter()}>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myFirebaseKey: state.myFirebaseKey
  }
}

export default connect(mapStateToProps)(Chat);


