import React, { Component } from 'react';

class SubmitForm extends Component {
  onSubmit(event) {
    event.preventDefault()
    this.props.onAddTweet(this.refs.tweet.value)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" ref="tweet" />
        <input type="submit" />
      </form>
    )
  }
}

export default SubmitForm;
