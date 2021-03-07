import React from "react";
import firebase from "firebase";
import SendToast from "../components/SendToast";

class SendPage extends React.Component {
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
      <div id="message-container">
        <SendToast isSignedIn={this.state.isSignedIn} />
      </div>
    );
  }
}
//<img id="toaster" src="https://cdn.glitch.com/81a9ef9b-83ef-4431-accc-ff258c28b3d4%2Ftoaster.png?v=1615093077849" />
export default SendPage;
