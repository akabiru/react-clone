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

var Feed = React.createClass({
  componentWillMount: function () {
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
  getInitialState: function () {
    return {
      tweets: [],
      users: []
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
