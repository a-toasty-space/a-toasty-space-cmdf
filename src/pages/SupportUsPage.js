import React from "react";
import firebase from 'firebase';

class SupportUsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: 0,
    };
  }
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.setState({
          isSignedIn: 1
        })
      }
    }.bind(this));
  }
  
  render() {
    return (
      <div id="supportuspage-container">
        <img id="happy_toasts" src="https://cdn.glitch.com/81a9ef9b-83ef-4431-accc-ff258c28b3d4%2F81a9ef9b-83ef-4431-accc-ff258c28b3d4_patreon%20illustration.png?v=1615103465274" />
        <div id="support-text">support us on:</div>
        <div id="support-buttons">
          <a href="https://devpost.com/software/a-toasty-space">
            <button type="button">devpost</button>
          </a>
        </div>
        
      </div>
      );
  } 
}

export default SupportUsPage;