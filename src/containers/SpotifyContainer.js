import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LoginButton from '../components/Login/LoginPage';
import MainPage from '../components/Main/MainPage';

import User from '../components/User';

import { headers } from '../authorization/headers';


class SpotifyContainer extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      currentUser: "",
    }
  }

  componentDidMount() {
    if (!this.state.loggedIn && localStorage.getItem("token")) {
      this.fetchUser()
      .then(data => {this.setState({ currentUser: data.data.attributes[`display-name`], loggedIn: true })})
    }

  }

  fetchUser = () => {
      return fetch(`http://localhost:3000/api/v1/current_user`, { headers: headers() })
        .then(resp => resp.json())
  }

  handleCode = router => {
    if (localStorage.getItem("token")) {
      this.props.history.push("/here")
    } else {
      fetch('http://localhost:3000/api/v1/home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ code: this.props.location.search.split("?code=")[1] })
      }
    )
    .then(res => res.json())
    .then(data => {
      debugger
      const {currentUser, code} = data
      localStorage.setItem("token", code);
      this.setState({ currentUser: currentUser['display_name'] }, () => this.props.history.push("/main"));
    })
    return null;
  }
  return null;
}

  // fetchArtistTopTracks = () => {
  //   fetch(`https://api.spotify.com/v1/artists/${this.state.currentArtistId}/top-tracks?country=US`, { headers: headers() })
  //     .then(resp => resp.json())
  //     .then(data => this.setState({ artistTopTracks: data.tracks }))
  // }

  render() {
    return (
      <div>
        <div align="right" className="four wide column">
          <User currentUser={this.state.currentUser} />
        </div><br /><br />

        <Route exact path="/login" component={LoginButton} />
        <Route exact path="/home" component={this.handleCode} />
        <Route exact path="/main" component={MainPage} />

      </div>
    )
  }
}

export default SpotifyContainer;
