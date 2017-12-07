import React from 'react';
import { Button, Header, Icon } from 'semantic-ui-react'

const TrackDetail = (props) => {
  const convertTime = (milliseconds) => {
    return parseInt(milliseconds / 1000 / 60) + ":" + parseInt(milliseconds / 1000 % 60);
  }

  return (
    <li>
      <ul>
          <Header as='h3'>
            <Header.Content>
              <Icon name='music' />
              {props.trackDetail.name}
            </Header.Content>
          </Header>
        Artist: {props.trackDetail.artists.map((artist) => {return artist.name}).join(', ')} <br/>
        Length: {convertTime(props.trackDetail.duration_ms)} <br/>
        Popularity: {props.trackDetail.popularity}% <br/><br/>
        <Button size="mini" onClick={props.fetchRelatedArtists} value={props.trackDetail.artists[0].id}>Related Artists</Button> <br/>
        <Button size="mini" onClick={props.handleUri} value={props.trackDetail.uri}>Play Song</Button> <br/><br/>
      </ul>
    </li>
  )
}

export default TrackDetail;
