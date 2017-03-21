import React, { Component } from 'react';
import Tweet from './Tweet';

class Feed extends Component {
  render() {
    var tweets = [];
    for (var key in this.props.tweets) {
      var tweet = this.props.tweets[key]
      var user;

      for (var idx in this.props.users) {
        if (this.props.users[idx].id == tweet.userId) {
          user = this.props.users[idx]
          break
        }
      }

      tweets.push(
        <Tweet body={tweet.body} user={user} key={tweet.id} />
      )
    }

    function getUser() {

    }

    console.log(tweets);
    return (
      <div>
        <p>Hello World</p>
        {tweets}
      </div>
    )
  }
}

export default Feed;
