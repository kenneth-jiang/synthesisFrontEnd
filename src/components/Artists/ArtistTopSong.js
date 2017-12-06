import React, { Component } from 'react';
import { headers } from '../../authorization/headers';

class ArtistTopSong extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topTracks: []
    }
  }

  componentDidMount() {
    // console.log(this.props);
    fetch(`https://synthesis-k3.herokuapp.com/api/v1/top_tracks?q=${this.props.artistId}`, { headers: headers() })
      .then(resp => resp.json())
      .then(data => this.setState({
        topTracks: data.top_tracks.tracks.slice(0, 3)
      }, () => {this.renderTopTracks()})
    )
  }

  renderTopTracks = () => {
    return this.state.topTracks.map(track => {
      return (
        <div key={track.id}>
          <ul>
            <li value={track.uri} onClick={e => this.props.playSongSnippet(track.uri)}>{track.name}</li>
          </ul>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderTopTracks()}
      </div>
    )
  }


}

export default ArtistTopSong;
