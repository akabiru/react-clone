import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Tweet extends Component {
  render() {
    return (
      <div className="tweet">
        <p>{this.props.user.handle}</p>
        <p>{this.props.body}</p>
      </div>
    )
  }
}

var Feed = React.createClass({
  getInitialState: function () {
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
      ],
      users: [
        {
          "id": 1,
          "handle": "@mark",
          "name": "Mark Zuck"
        },
        {
          "id": 2,
          "handle": "@austin",
          "name": "Austin Kabiru"
        },
        {
          "id": 1,
          "handle": "@jon",
          "name": "Jon Chan"
        }
      ]
    }
  },
  render: function () {
    var tweets = [];
    for (var key in this.state.tweets) {
      var tweet = this.state.tweets[key]
      var user;

      for (var idx in this.state.users) {
        if ( this.state.users[idx].id == tweet.userId) {
          user = this.state.users[idx]
          break
        }
      }

      tweets.push(
        <Tweet body={tweet.body} user={user} />
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
