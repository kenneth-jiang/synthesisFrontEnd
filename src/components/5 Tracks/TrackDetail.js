import React from 'react';
import { Button, Header, Icon } from 'semantic-ui-react'

const TrackDetail = (props) => {
  const convertTime = (milliseconds) => {
    return parseInt((milliseconds / 1000 / 60), 10) + ":" + parseInt((milliseconds / 1000 % 60), 10);
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
        <Button.Group>
          <Button color="grey" size="tiny" onClick={props.fetchRelatedArtists} value={props.trackDetail.artists[0].id}>Find Related Artists</Button>
          <Button.Or />
          <Button color="teal" size="tiny" onClick={props.handleUri} value={props.trackDetail.uri}>Play Song Snippet</Button>
        </Button.Group><br/><br/>
      </ul>
    </li>
  )
}

export default TrackDetail;
