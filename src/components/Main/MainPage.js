import React from 'react';

import { Grid } from 'semantic-ui-react'

import { headers } from '../../authorization/headers';

import SearchBar from '../SearchBar';
import Results from '../Results';
import RelatedArtists from '../RelatedArtists';
import SpotifyPlayer from '../SpotifyPlayer';

class MainPage extends React.Component {
  constructor() {
    super();

    this.state = {
      songSearchTerm: "",
      artistSearchTerm: "",

      isSong: true,
      isRelated: true,

      songResults: [],
      artistResults: [],

      currentArtistId: "", //used for to search related artists and top tracks
      relatedArtists: [],
      topTracks: [],

      spotifyUri: "spotify:track:3vv9phIu6Y1vX3jcqaGz5Z",
    }
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
      .then(data => this.setState({ songResults: data.songs.tracks.items }))
    } else {
      fetch(`https://synthesis-k3.herokuapp.com/api/v1/artists?q=${this.state.artistSearchTerm}`, { headers: headers() })
        .then(resp => resp.json())
        .then(data => this.setState({ artistResults: data.artists.artists.items }, () => {
          fetch(`https://synthesis-k3.herokuapp.com/api/v1/related_artists?q=${this.state.artistResults[0].id}`, { headers: headers() })
            .then(resp => resp.json())
            .then(data =>
              this.setState({ relatedArtists: data.related_artist.artists })
            )
          })
        )
      }
    }
  // submit either song or artist form and sets state for song or artist results

  handleArtistId = (event) => {
    this.setState({ isRelated: true, currentArtistId: event.target.id },
    () => fetch(`https://synthesis-k3.herokuapp.com/api/v1/related_artists?q=${this.state.currentArtistId}`, { headers: headers() })
        .then(resp => resp.json())
        .then(data => this.setState({ relatedArtists: data.related_artist.artists }))
    )
  }
  // sets related artist for user input of artist search

  handleTopTracks = (event) => {
   this.setState({ isRelated: false, currentArtistId: event.target.id }, () =>
     fetch(`https://synthesis-k3.herokuapp.com/api/v1/top_tracks?q=${this.state.currentArtistId}`, { headers: headers() })
       .then(resp => resp.json())
       .then(data => this.setState({ topTracks: data.top_tracks.tracks }, () => console.log(this.state.topTracks)))
     )
   }

  handleUri = (event) => {
    this.setState({ spotifyUri: event.target.value })
  }
  // sets state for song changes for demo player

  playSongSnippet = songUri => {
    this.setState({
      spotifyUri: songUri
    })
  }
  // sets state for song changes for demo player

  render() {
    const { songSearchTerm, artistSearchTerm, isSong, songResults, artistResults, relatedArtists, currentArtistId, isRelated, topTracks, spotifyUri } = this.state;
    return (
      <div>

      <SpotifyPlayer spotifyUri={spotifyUri} />
      <br />
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

      <Grid columns={3} divided>

        <Grid.Column className="eight wide column">
          <Results
            songSearchTerm={songSearchTerm}
            artistSearchTerm={artistSearchTerm}
            isSong={isSong}
            songResults={songResults}
            artistResults={artistResults}
            relatedArtists={relatedArtists}
            handleArtistId={this.handleArtistId}
            currentArtistId={currentArtistId}
            handleTopTracks={this.handleTopTracks}
            playSongSnippet={this.playSongSnippet}
          />
        </Grid.Column>


        <Grid.Column className="eight wide column">
          <RelatedArtists
            relatedArtists={relatedArtists}
            isRelated={isRelated}
            topTracks={topTracks}
            handleUri={this.handleUri}
            spotifyUri={spotifyUri}
          />
        </Grid.Column>
      </Grid>

      </div>
    )
  }
}

export default MainPage;
