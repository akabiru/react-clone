import React, { Component } from 'react';
import Axios from 'axios';
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

var SubmitForm = React.createClass({
  onSubmit: function(event) {
    event.preventDefault()
    this.props.onAddTweet(this.refs.tweet.value)
  },
  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" ref="tweet" />
        <input type="submit" />
      </form>
    )
  }
})

var Feed = React.createClass({
  render: function () {
    var tweets = [];
    for (var key in this.props.tweets) {
      var tweet = this.props.tweets[key]
      var user;

      for (var idx in this.props.users) {
        if ( this.props.users[idx].id == tweet.userId) {
          user = this.props.users[idx]
          break
        }
      }

      tweets.push(
        <Tweet body={tweet.body} user={user} key={tweet.id}/>
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

var App = React.createClass({
  componentWillMount() {
    var that = this;
    Axios.get('http://localhost:4000/tweets')
      .then(function(tweets) {
        console.log('Ther er: ', tweets.data);
        that.setState({ tweets: tweets.data });
      })
      .catch(function(error) {
        // handle error
      })
    
    Axios.get('http://localhost:4000/users')
      .then(function(users) {
        console.log('Users: ', users.data);
        that.setState({ users: users.data })
      })
      .catch(function(error) {
        // handle error
      })
  },
  addTweet(tweet) {
    this.setState({
      tweets: this.state.tweets.concat([
        {
          "id": this.state.tweets.length + 1,
          "userId": 1,
          "body": tweet,
          "noOfLikes": 0,
          "datePosted": ""
        }
      ])
    })
  },
  getInitialState() {
    return {
      tweets: [],
      users: []
    }
  },
  render() {
    return (
      <div className="App">
        <SubmitForm users={this.state.users} onAddTweet={this.addTweet} />
        <Feed users={this.state.users} tweets={this.state.tweets} />
      </div>
    );
  }
})

export default App;
