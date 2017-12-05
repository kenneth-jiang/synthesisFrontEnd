import React from 'react';

import { Grid } from 'semantic-ui-react'

import { headers } from '../../authorization/headers';

import SearchBar from '../SearchBar';
import Results from '../Results';
import RelatedArtists from '../RelatedArtists';


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
      currentArtistId: "",
      relatedArtists: [],
      topTracks: [],
    }
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
      fetch(`http://localhost:3000/api/v1/songs?q=${this.state.songSearchTerm}`, { headers: headers() })
        .then(resp => resp.json())
        .then(data => this.setState({ songResults: data.songs.tracks.items }))
    } else {
      fetch(`http://localhost:3000/api/v1/artists?q=${this.state.artistSearchTerm}`, { headers: headers() })
        .then(resp => resp.json())
        .then(data => this.setState({ artistResults: data.artists.artists.items }, () => {
          fetch(`http://localhost:3000/api/v1/related_artists?q=${this.state.artistResults[0].id}`, { headers: headers() })
            .then(resp => resp.json())
            .then(data => this.setState({ relatedArtists: data.related_artist.artists }))
          })
        )
      }
    }

  handleArtistId = (event) => {
    this.setState({ isRelated: true, currentArtistId: event.target.id }, () =>
      fetch(`http://localhost:3000/api/v1/related_artists?q=${this.state.currentArtistId}`, { headers: headers() })
        .then(resp => resp.json())
        .then(data => this.setState({ relatedArtists: data.related_artist.artists }))
    )
  }

  handleTopTracks = (event) => {
    this.setState({ isRelated: false, currentArtistId: event.target.id }, () =>
      fetch(`http://localhost:3000/api/v1/top_tracks?q=${this.state.currentArtistId}`, { headers: headers() })
        .then(resp => resp.json())
        .then(data => this.setState({ topTracks: data.top_tracks.tracks }, () => console.log(this.state.topTracks)))
    )
  }

  render() {
    const { songSearchTerm, artistSearchTerm, isSong, songResults, artistResults, relatedArtists, currentArtistId, isRelated, topTracks } = this.state;
    return (

      <div>

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
          />
        </Grid.Column>


        <Grid.Column className="eight wide column">
          <RelatedArtists
            isRelated={isRelated}
            relatedArtists={relatedArtists}
            topTracks={topTracks}
          />
        </Grid.Column>
      </Grid>

      </div>
    )
  }
}

export default MainPage;
