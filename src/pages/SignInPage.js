import React from "react";
import firebase from "firebase";
import SignIn from "../components/Sign/SignIn";

class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: 0
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(
      function(user) {
        if (user) {
          this.setState({
            isSignedIn: 1
          });
        }
      }.bind(this)
    );
  }

  render() {
    return (
      <div id="signin-container">
        <SignIn isSignedIn={this.state.isSignedIn} />

        <img
          id="flamey"
          src="https://cdn.glitch.com/81a9ef9b-83ef-4431-accc-ff258c28b3d4%2Ffire%20guy.png?v=1615093076130"
        />
        <img
          id="cloud-left"
          src="https://cdn.glitch.com/81a9ef9b-83ef-4431-accc-ff258c28b3d4%2Foverlay-cloud.png"
        />
        <img
          id="cloud-right"
          src="https://cdn.glitch.com/81a9ef9b-83ef-4431-accc-ff258c28b3d4%2Foverlay-cloud.png"
        />
        <div id="flamey-text">litty!</div>
      </div>
    );
  }
}

export default SignInPage;
