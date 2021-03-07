import React from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";

class MainPage extends React.Component {
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
    const { isSignedIn } = this.state;
    
    return (
      <div id="mainpage-container">
        <div id="slogan-text">
          A toast
          <br />
          to you!
        </div>
        { isSignedIn === 0 ? 
        <div id="mainpage-buttons">
          <Link to="/login">
            <button type="button">log in!</button>
          </Link>
          <Link to="/signup">
            <button type="button">sign up!</button>
          </Link>
        </div> :
          "" }
      </div>
    );
  }
}

export default MainPage;
