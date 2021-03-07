import React from "react";
import firebase from 'firebase';

class AboutUsPage extends React.Component {
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
      <div id="aboutuspage-container">
        <img id="guytalking" src="https://cdn.glitch.com/81a9ef9b-83ef-4431-accc-ff258c28b3d4%2Ftoast%20speaking.png?v=1615096093835" />
        <img id="lisa" src="https://cdn.glitch.com/81a9ef9b-83ef-4431-accc-ff258c28b3d4%2FLisa.png?v=1615088699038" />
        <img id="debby" src="https://cdn.glitch.com/81a9ef9b-83ef-4431-accc-ff258c28b3d4%2Fdebby.png?v=1615088692996" />
        <img id="ruby" src="https://cdn.glitch.com/81a9ef9b-83ef-4431-accc-ff258c28b3d4%2Fruby.png?v=1615088707299" />
        <img id="naiomi" src="https://cdn.glitch.com/81a9ef9b-83ef-4431-accc-ff258c28b3d4%2Fnaiomi.png?v=1615088729551" />
        <div id="main-text">about us</div>
        <div id="meet-the-team-text">meet the team</div>
        <div id="about-us-text">A Toasty Space was created to encourage positivity! Started by a few students in the Lower Mainland of British Columbia, A Toasty Space aims to bring people together to toast everyone's accomplishments—no matter how small the slice! Made by women, for women*.</div>
        <div id="inclusive-text"><small>(We use * to specifically and intentionally include cis and trans women, as well as women-identifying non-binary, agender, or intersex people and other gender minorities.)</small></div>
        <div id="about-lisa">name: toast lisa <br/>kind of toast: sourdough <br/>toastiest quote: “I don't know what's going on”</div>
        <div id="about-debby">name: toast debby<br/>kind of toast: whole wheat <br/>toastiest quote: “sometimes i dont feel hot enough to buy groceries”</div>
        <div id="about-ruby">name: toast ruby<br/>kind of toast: all types!<br/>toastiest quote: “woof. Let's get this bread.”</div>
        <div id="about-naiomi">name: toast naiomi<br/>kind of toast: avocado <br/>toastiest quote: “going with the flow”</div>
      </div>

      );
  } 
}

export default AboutUsPage;