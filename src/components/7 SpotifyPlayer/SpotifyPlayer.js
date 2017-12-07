import React from 'react';

const Url = "https://open.spotify.com/embed?uri="

const SpotifyPlayer = (props) => {
  return (
    <div align="center">
      <iframe title={props.spotifyUri} src={Url + props.spotifyUri} width="300" height="380" frameBorder="0" allowtransparency="true" />
    </div>
  )
}

export default SpotifyPlayer;
