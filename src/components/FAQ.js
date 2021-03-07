import React from 'react';

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {opened: 0};
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    const { opened } = this.state;
    
    if (opened === 1) {
      this.setState({opened: 0});
    } else {
      this.setState({opened: 1});
    }
  }
  
  render() {
    const { opened } = this.state;
    
    return (
      <div className={`item ${ opened === 1 ? "open" : "close" }`}>
        <button className="question" onClick={this.handleClick}>
          Q: {this.props.question}
          
          <div class="triangle"></div>
        </button>
        <div className="answer">
          A: {this.props.answer}
        </div>
      </div>
    );
  }
}

export default FAQ;