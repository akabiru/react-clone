import React, { Component } from 'react';
import axios from 'axios';
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
    this.addTweet = this.addTweet.bind(this)
  }

  componentWillMount() {
    var theState = {}

    axios.get('http://localhost:4000/users')
      .then(users => theState["users"] = users.data)
      .catch(error => console.error(error))

    axios.get('http://localhost:4000/tweets')
      .then(tweets => theState["tweets"] = tweets.data)
      .catch(error => console.error(error))

    this.setState(theState)
  }

  checkState(key, value) {
    
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
