import React from 'react';

class ReadToast extends React.Component {
  render() {  
    return (
      <div className={`toast version-${this.props.version}`}>
        <div className="innerToast">{this.props.text}</div>
      </div>
    );
  }
}

export default ReadToast;