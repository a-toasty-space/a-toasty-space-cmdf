import React from 'react';
import { NavLink } from "react-router-dom";

class DashboardButton extends React.Component {
  render() {
    if (this.props.isSignedIn === 1) {
      return (
        <NavLink to="/dashboard" className="link">dashboard</NavLink>
      );
    } else {
      return null;
    }
  }
}

export default DashboardButton;