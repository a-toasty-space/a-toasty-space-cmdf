import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

// Ruby n deeby experimenting with code don't mind me ;;
class SendToast extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      sent: 0
    }
    
    //DO WE NEED?
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  
  handleChange(event) {
    this.setState({msg: event.target.value});
  }
  


  handleSubmit(event) {
    const { msg } = this.state;
    
    if (msg === '')
      return;
    
    saveMessage(msg);//???
    this.setState({sent: 1});
    event.preventDefault();
  }

render() {
  const { sent } = this.state;
  
//input text box for the toast message input
// please send us toast ;-; ;-;
  
  if (this.props.isSignedIn === 0) {
    return (<div id="toast"><div id="notLoggedIn">Please log in to send toasts!</div></div>);
  } else if (sent === 0) {
  return (<div id="toast">
    <form onSubmit={this.handleSubmit}>
        <textarea placeholder="start typing here..." name="message" value={this.state.msg} onChange={this.handleChange} />
        <input type="submit" value="send toast" />
    </form></div>
);
  } else {
    return (
      <div id="toast"><div id="sentToast">Toast sent!</div></div>
    );
  }
}
}
  

// Saves a new message to your Cloud Firestore database.
function saveMessage(messageText) {
  // Add a new message entry to the database.
  return firebase.firestore().collection('messages').add({
    msg: messageText,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).catch(function(error) {
    console.error('Error writing new message to database', error);
  });
}




export default SendToast;