import React from "react";
import firebase from 'firebase';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
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
    <div id="dashboard-container">
      <div id="image-container">
      <img id="cuties" src="https://cdn.glitch.com/81a9ef9b-83ef-4431-accc-ff258c28b3d4%2Fdashboard2.png"/>
      <img id="carpet" src="https://cdn.glitch.com/81a9ef9b-83ef-4431-accc-ff258c28b3d4%2Fcarpet.png"/>
      </div>
      { isSignedIn === 1 ?
      <><Link to="/send">
        <img id="write-toast" src="https://cdn.glitch.com/81a9ef9b-83ef-4431-accc-ff258c28b3d4%2Ftoastynote.png?v=1615088678372"/>
      </Link>
      <Link to="/read">
        <img id="read-toast" src="https://cdn.glitch.com/81a9ef9b-83ef-4431-accc-ff258c28b3d4%2Ftoastyread.png?v=1615123043266"/>
      </Link></> : <div className="loginButton"><Link to="/login">
                    <button>login</button>
                  </Link></div>
        }
      
    </div>
  ); 
  }
  
}

export default Dashboard;