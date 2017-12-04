import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Grid } from 'semantic-ui-react'
// import { Button } from 'semantic-ui-react'

import LoginButton from '../components/Login/LoginPage';
import MainPage from '../components/Main/MainPage';

import { headers } from '../authorization/headers';

import User from '../components/User';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';
import RelatedArtists from '../components/RelatedArtists';


class SpotifyContainer extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: "",
      songSearchTerm: "",
      artistSearchTerm: "",
      isSong: true,
      songResults: [],
      artistResults: [],
      relatedArtists: [],
    }
  }

  componentDidMount() {
    fetch("https://api.spotify.com/v1/me", { headers: headers() })
      .then(resp => resp.json())
      .then(user => this.setState({ currentUser: user.display_name }))
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
      this.setState({username},() => router.history.push("/main"));
    })
    return null
  }
  return null
}

  handleChange = (event) => {
    if (this.state.isSong) {
      this.setState({ songSearchTerm: event.target.value });
    } else {
      this.setState({ artistSearchTerm: event.target.value })
    }
  }

  handleClick = (event) => {
    return event.target.name === "song" ? this.setState({ isSong: true }) : this.setState({ isSong: false });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.isSong) {
      fetch(`https://api.spotify.com/v1/search?q=${this.state.songSearchTerm}&type=track`, { headers: headers() })
      .then(resp => resp.json())
      .then(data => this.setState({ songResults: data.tracks.items }))
    } else {
      fetch(`https://api.spotify.com/v1/search?q=${this.state.artistSearchTerm}&type=artist`, { headers: headers() })
        .then(resp => resp.json())
        .then(data => this.setState({ artistResults: data.artists.items }, () => {
          fetch(`https://api.spotify.com/v1/artists/${this.state.artistResults[0].id}/related-artists`, { headers: headers() })
            .then(resp => resp.json())
            .then(data => this.setState({ relatedArtists: data.artists }))
          })
        )
      }
    }

  render() {
    const { currentUser, songSearchTerm, artistSearchTerm, isSong, songResults, artistResults, relatedArtists } = this.state;

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
            <SearchBar
              songSearchTerm={songSearchTerm}
              isSong={isSong}
              handleClick={this.handleClick}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </Grid.Column>
        </Grid>

        <Grid className="ui equal width grid">
          <Grid.Column className="eight wide column">
            <Results
              songSearchTerm={songSearchTerm}
              artistSearchTerm={artistSearchTerm}
              isSong={isSong}
              songResults={songResults}
              artistResults={artistResults}
              relatedArtists={relatedArtists}
            />
          </Grid.Column>

          <Grid.Column className="eight wide column">
            <RelatedArtists
              relatedArtists={relatedArtists}
            />
          </Grid.Column>
        </Grid>

      </div>
    )
  }
}

export default SpotifyContainer;
