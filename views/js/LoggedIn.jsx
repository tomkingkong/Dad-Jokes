// import React, { Component } from 'react';
// import Joke from './Joke';

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    }
  }

  render() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <br />
          <span className="pull-right">
            <a onClick={this.logout}>Log Out</a>
          </span>
          <h2>Dad Jokes</h2>
          <p>Let's feed you with some funny jokes!!</p>
          <div className="row">
            {this.state.jokes.map((joke, i) => <Joke key={i} joke={joke} />)}
          </div>
        </div>
      </div>
    )
  }
}
