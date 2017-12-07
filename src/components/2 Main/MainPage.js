import React from 'react';
import { Grid } from 'semantic-ui-react'

import { headers } from '../../authorization/headers';
import User from '../3 Profile/User';
import SearchBar from '../4 Search/SearchBar';
import TracksList from '../5 Tracks/TracksList';
import TopTracksList from "../5 Tracks/TopTracksList";
import ArtistsList from '../6 Artists/ArtistsList';
import RelatedArtistsList from '../6 Artists/RelatedArtistsList';
import SpotifyPlayer from '../7 SpotifyPlayer/SpotifyPlayer';


class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isSong: true,
      songSearchTerm: "",
      artistSearchTerm: "",
      trackResults: [],
      artistResults: [],
      currentArtistId: "", //used for to search related artists and top tracks
      topTracks: [],
      relatedArtists: [],
      spotifyUri: "spotify:track:0bYg9bo50gSsH3LtXe2SQn",
      currentUser: "",
      loggedIn: false,
    }
  }

  componentDidMount() {
    if (!this.state.loggedIn && localStorage.getItem("token")) {
      this.fetchUser()
      .then(data => {this.setState({ currentUser: data.data.attributes["display-name"], loggedIn: true })})
    }
  }

  fetchUser = () => {
    return fetch(`https://synthesis-k3.herokuapp.com/api/v1/current_user`, { headers: headers() })
      .then(resp => resp.json())
  }

  handleClick = (event) => {
    return event.target.name === "song" ? this.setState({ isSong: true }) : this.setState({ isSong: false });
  }
  // display either song or artist results

  handleChange = (event) => {
    if (this.state.isSong) {
      this.setState({ songSearchTerm: event.target.value });
    } else {
      this.setState({ artistSearchTerm: event.target.value })
    }
  }
  // set state for whether to display song or artist input


  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.isSong) {
      fetch(`https://synthesis-k3.herokuapp.com/api/v1/songs?q=${this.state.songSearchTerm}`, { headers: headers() })
      .then(resp => resp.json())
      .then(data => this.setState({ trackResults: data.songs.tracks.items }))
    } else {
      fetch(`https://synthesis-k3.herokuapp.com/api/v1/artists?q=${this.state.artistSearchTerm}`, { headers: headers() })
        .then(resp => resp.json())
        .then(data => this.setState({ artistResults: data.artists.artists.items }))
      }
    }
    // submit either song or artist form and sets state for song or artist results

  fetchRelatedArtists = (event) => {
    this.setState({ currentArtistId: event.target.value }, () =>
      fetch(`https://synthesis-k3.herokuapp.com/api/v1/related_artists?q=${this.state.currentArtistId}`, { headers: headers() })
        .then(resp => resp.json())
        .then(data => this.setState({ relatedArtists: data.related_artist.artists }))
    )
  }

  fetchTopTracks = (event) => {
    this.setState({ currentArtistId: event.target.value }, () =>
      fetch(`https://synthesis-k3.herokuapp.com/api/v1/top_tracks?q=${this.state.currentArtistId}`, { headers: headers() })
        .then(resp => resp.json())
        .then(data => this.setState({ topTracks: data.top_tracks.tracks }))
    )
  }

  handleUri = (event) => {
    this.setState({ spotifyUri: event.target.value })
  }
  // sets state for song changes for demo player

  render() {
    const { isSong, songSearchTerm, artistSearchTerm, trackResults, artistResults, relatedArtists, topTracks, spotifyUri } = this.state;

    return (
      <div>
        <div align="right" className="four wide column">
          <User currentUser={this.state.currentUser} />
        </div><br /><br />
        <SpotifyPlayer spotifyUri={spotifyUri} /><br/>
        <Grid>
          <Grid.Column align="center" className="ui grid">
            <SearchBar
              isSong={isSong}
              songSearchTerm={songSearchTerm}
              artistSearchTerm={artistSearchTerm}
              handleClick={this.handleClick}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </Grid.Column>
        </Grid>
        <Grid columns={3} divided>
          <Grid.Column>
            <RelatedArtistsList
              relatedArtists={relatedArtists}
              fetchRelatedArtists={this.fetchRelatedArtists}
              fetchTopTracks={this.fetchTopTracks}
            />
          </Grid.Column>
          <Grid.Column>
            {isSong ?
              <TracksList
                trackResults={trackResults}
                fetchRelatedArtists={this.fetchRelatedArtists}
                fetchTopTracks={this.fetchTopTracks}
                handleUri={this.handleUri}
              />
            :
              <ArtistsList
                artistResults={artistResults}
                fetchRelatedArtists={this.fetchRelatedArtists}
                fetchTopTracks={this.fetchTopTracks}
              />
            }
          </Grid.Column>
          <Grid.Column>
            <TopTracksList
              topTracks={topTracks}
              fetchRelatedArtists={this.fetchRelatedArtists}
              handleUri={this.handleUri}
            />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default MainPage;
