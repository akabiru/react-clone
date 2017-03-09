import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Tweet extends Component {
  render() {
    return (
      <div className="tweet">
        <p>{this.props.body}</p>
        <p>{this.props.userId}</p>
      </div>
      )
  }
}

var Feed = React.createClass({
  getInitialState: function() {
    return {
      tweets: [
        {
          "id": 1,
          "userId": 1,
          "body": "React is awesome!",
          "noOfLikes": 24,
          "datePosted": "2017-03-22 12:00:22"
        },
        {
          "id": 2,
          "userId": 1,
          "body": "...so is React Native!",
          "noOfLikes": 12,
          "datePosted": "2017-03-22 12:00:22"
        }
      ]
    }
  },
  render: function() {
    var tweets = [];
    for (var key in this.state.tweets) {
          var tweet = this.state.tweets[key]
          tweets.push(
            <Tweet body={tweet.body} userId={tweet.userId} />
          )
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
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hi there</p>
        <Feed />
      </div>
    );
  }
}

export default App;
