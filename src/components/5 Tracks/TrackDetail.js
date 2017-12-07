import React from 'react';
import { Button } from 'semantic-ui-react'

const TrackDetail = (props) => {
  return (
    <li>
      <ul>
        {props.trackDetail.name} <br/>
        Artist: {props.trackDetail.artists.map((artist) => {return artist.name}).join(', ')} <br/>
        Length: {((props.trackDetail.duration_ms)/60000)} <br/>
        Popularity: {props.trackDetail.popularity} <br/><br/>
        <Button size="mini" onClick={props.fetchRelatedArtists} value={props.trackDetail.artists[0].id}>Related Artists</Button> <br/>
        <Button size="mini" onClick={props.handleUri} value={props.trackDetail.uri}>Play Song</Button> <br/><br/>
      </ul>
    </li>
  )
}

export default TrackDetail;
