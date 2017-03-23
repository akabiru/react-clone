import React, { Component } from 'react';

class SubmitForm extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.onAddTweet(this.refs.tweet.value)
    console.log("This is this: ", this)
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
