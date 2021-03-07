import React from 'react';
import { Link, NavLink } from "react-router-dom";
import firebase from "firebase/app"
import 'firebase/auth';

import SignOutButton from '../Sign/SignOutButton';
import DashboardButton from '../DashboardButton';

// AL;SKDJFAS;LKDFJA SLDFOMGOMGOMGOMG THE TODO A;LDSKFJASKDLFJAS;LDKFJASDFKJASDF FLASHBACKS AAHHH
//TODO: add css code to format???
class Nav extends React.Component {
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

      <div id="nav-bar">
        <Link to="/" className="title">A Toasty Space</Link>
        <DashboardButton isSignedIn={this.state.isSignedIn} />
        <NavLink to="/aboutus" className="link">About Us</NavLink>
        <NavLink to="/faq" className="link">FAQ</NavLink>
        <NavLink to="/supportus" className="link">Support Us</NavLink>
        <SignOutButton isSignedIn={this.state.isSignedIn} />
      </div>
    );
  }
}

export default Nav;
