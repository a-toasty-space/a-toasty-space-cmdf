import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  
  handleSubmit(event) {
    const { email, password } = this.state;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    
    event.preventDefault();
  }
  
  render() {
    if (this.props.isSignedIn === 0) {
      return (<div id="signin">
        <img id="overlaycloud" src="https://cdn.glitch.com/81a9ef9b-83ef-4431-accc-ff258c28b3d4%2Foverlay-cloud.png" />
        <form onSubmit={this.handleSubmit}>
     
          <input placeholder="email" type="text" name="email" onChange={this.handleEmailChange} required />
          
          <input placeholder="password" type="password" name="password" onChange={this.handlePasswordChange} required />
          <a href="/signup">Don't have an account? Register now!</a>

          <input login="login" type="submit" value="login" />

        </form></div>
      );
    } else if (this.props.isSignedIn === 1) {
      return (
        <div id="signin" className="signedin">
          <img id="overlaycloud" src="https://cdn.glitch.com/81a9ef9b-83ef-4431-accc-ff258c28b3d4%2Foverlay-cloud.png" />
          <Link to="/dashboard">Logged in! Go to dashboard?</Link>
        </div>
      );
    }
  }
  
}

export default SignIn;