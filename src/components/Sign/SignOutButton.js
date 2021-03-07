import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { NavLink } from "react-router-dom";

class SignOutButton extends React.Component {
  
  signOut() {
    firebase.auth().signOut().then(() => {
    }).catch((error) => {
      // An error happened.
    });
    window.location.reload(false); 
  }
  
  
  
  render() {
    if (this.props.isSignedIn === 1) {
      return (
        <NavLink to="#" onClick={this.signOut} className="link">Sign Out</NavLink>
      );
    } else {
      return <NavLink to="/login" className="link">Login</NavLink>;
    }
  }
  
}

export default SignOutButton;