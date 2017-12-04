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
      songResults: [],
      artistResults: [],
      currentArtistId: "",
      relatedArtists: [],
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

  handleArtistId = (event) => {
    this.setState({ currentArtistId: event.target.id },
      () => fetch(`https://api.spotify.com/v1/artists/${this.state.currentArtistId}/related-artists`, { headers: headers() })
        .then(resp => resp.json())
        .then(data => this.setState({ relatedArtists: data.artists }))
    )
  }

  render() {
    const { songSearchTerm, artistSearchTerm, isSong, songResults, artistResults, relatedArtists, currentArtistId } = this.state;
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

export default MainPage;
