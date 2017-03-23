import React, { Component } from 'react';

class Tweet extends Component {
  render() {
    console.log("Props: ", this.props) 
    return (
      <div className="tweet">
        <p>{this.props.user.handle}</p>
        <p>{this.props.body}</p>
      </div>
    )
  }
}

export default Tweet;
