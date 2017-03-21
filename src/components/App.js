import React, { Component } from 'react';
import Axios from 'axios';
import logo from '../styles/logo.svg';
import Feed from './Feed';
import SubmitForm from './SubmitForm';
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tweets: [],
      users: []
    }
  }

  componentWillMount() {
    var that = this;
    
    Axios.get('http://localhost:4000/tweets')
      .then(function (tweets) {
        console.log('Ther er: ', tweets.data);
        that.setState({ tweets: tweets.data });
      })
      .catch(function (error) {
        // handle error
      })

    Axios.get('http://localhost:4000/users')
      .then(function (users) {
        console.log('Users: ', users.data);
        that.setState({ users: users.data })
      })
      .catch(function (error) {
        // handle error
      })
  }

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
  }

  render() {
    return (
      <div className="App">
        <SubmitForm users={this.state.users} onAddTweet={this.addTweet} />
        <Feed users={this.state.users} tweets={this.state.tweets} />
      </div>
    );
  }
}

export default App;
