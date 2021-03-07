import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { Link } from 'react-router-dom';

import ReadToast from '../components/ReadToast.js';

var db = firebase.firestore();

class ReadPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {msgs: [], isSignedIn: 0};
  }
  
  componentDidMount() {
    let array = new Array();
    let sample = ["hi", "hello"];
    
    firebase.auth().onAuthStateChanged(
      function(user) {
        if (user) {
          this.setState({
            isSignedIn: 1
          });
        }
      }.bind(this)
    );
    
    db.collection("messages").orderBy("timestamp", "desc").limit(6).get().then((querySnapshot) => {
    querySnapshot.forEach((item) => {
        // doc.data() is never undefined for query doc snapshots
        array.push(item.data().msg);
    });
}).then(
    () => {
          this.setState({msgs: array});
          }
    );
    
    
  }
  
  renderToast(i) {
    return <ReadToast version={i} text={this.state.msgs[i]} />;
  }
  
  render() {
    const { isSignedIn } = this.state;
    
    if (isSignedIn === 1) {
      return (
        <div id="read-container">
          <div className="row1">
            {this.renderToast(0)}
            {this.renderToast(1)}
            {this.renderToast(2)}
          </div>
          <div className="row2">
            {this.renderToast(3)}
            {this.renderToast(4)}
            {this.renderToast(5)}
          </div>
        </div>
      );
    } else if (isSignedIn === 0) {
      return (<div id="read-container">
        <Link to="/login">
          <button>login</button>
        </Link>
      </div>);
    } else {
      return <div id="read-container"></div>;
    }
  }
}

class Message {
  constructor (msg, timestamp) {
      this.msg = msg;
      this.timestamp = timestamp;
  }
  toString() {
      return this.msg;
  }
}

let itemConverter = {
  toFirestore: function(item) {
      return {
          msg: item.msg,
          timestamp: item.timestamp
          };
  },
  fromFirestore: function(snapshot){
      const data = snapshot.data();
      return new Message(data.msg, data.timestamp);
  }
};

export default ReadPage;
