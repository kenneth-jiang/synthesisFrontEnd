import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Grid } from 'semantic-ui-react'
// import { Button } from 'semantic-ui-react'

import LoginButton from '../components/Login/LoginPage';
import MainPage from '../components/Main/MainPage';

import Related from '../components/NewReleases';
import Results from '../components/Results';
import SearchBar from '../components/SearchBar';
import User from '../components/User';

// import { fetchProfile } from '../actions/fetchProfile';
// import { fetchSong } from '../actions/fetchSong';

import { headers } from '../authorization/headers';


class SpotifyContainer extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: "",
      searchTerm: "",
      isSong: true,
      artist: "",
      song: {},
      topTracks: [],
      newReleases: [],
      results: [],
    }
  }

  componentDidMount() {
    fetch("https://api.spotify.com/v1/me", { headers: headers() })
      .then(resp => resp.json())
      .then(user => this.setState({ currentUser: user.display_name }))
    fetch(`https://api.spotify.com/v1/browse/new-releases`, { headers: headers() })
      .then(resp => resp.json())
      .then(data => this.setState({ newReleases: data }))
  }

  handleCode = router => {
    if (localStorage.getItem("token")) {
      router.history.push("/here")
    } else {
      fetch('http://localhost:3000/api/v1/home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ code: router.location.search.split("?code=")[1] })
      }
    )
    .then(res => res.json())
    .then(data=> {
      const {username,code} = data
      localStorage.setItem("token", code);
      this.setState({username},() => router.history.push("/main"))
    })
    return null
  }
  return null
}

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  handleClick = (event) => {
    return event.target.name === "song" ? this.setState({ isSong: true }) : this.setState({ isSong: false });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.spotify.com/v1/search?q=${this.state.searchTerm}&type=track`, { headers: headers() })
      .then(resp => resp.json())
      .then(data => this.setState({ results: data.tracks.items }))
  }

  render() {
    const { currentUser, searchTerm, isSong, results, topTracks } = this.state;

    return (
      <div>
        <Route exact path="/login" component={LoginButton} />
        <Route exact path="/home" component={this.handleCode} />
        <Route exact path="/main" component={MainPage} />

        <div align="right" className="four wide column">
          <User currentUser={currentUser} />
        </div>

        <Grid>
          <Grid.Column align="center" className="ui grid">
            <SearchBar searchTerm={searchTerm} isSong={isSong} handleClick={this.handleClick} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          </Grid.Column>
        </Grid>

        <Grid>
          <Grid.Column className="eight wide column">
            <Results searchTerm={searchTerm} results={results} />
          </Grid.Column>
          <Grid.Column className="eight wide column">
            <Related topTracks={topTracks} searchTerm={searchTerm} />
          </Grid.Column>
        </Grid>

      </div>
    )
  }
}

export default SpotifyContainer;
