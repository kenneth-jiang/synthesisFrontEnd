import React from 'react';
import { Image, Button, Header, Icon } from 'semantic-ui-react';

const ArtistDetail = props => {
  return (
    <li key={props.artistResult.id}>
      <ul>
        <Header as='h3'>
          <Header.Content>
            <Icon name='group' />
            {props.artistResult.name}
          </Header.Content>
        </Header>
        {props.artistResult.images.length !== 0 && props.artistResult.images[2] !== undefined ? <Image src={props.artistResult.images[2].url} width="120" height="120" circular /> : null}<br/>
        Followers: {props.artistResult.followers.total}<br/>
        Popularity: {props.artistResult.popularity}%<br/><br/>
        <Button.Group>
          <Button color="grey" size="tiny" onClick={props.fetchRelatedArtists} value={props.artistResult.id}>Find Related Artists</Button>
          <Button.Or />
          <Button color="teal" size="tiny" onClick={props.fetchTopTracks} value={props.artistResult.id}>Find Top Tracks</Button>
        </Button.Group><br/><br/>
        <br/><br/>
      </ul>
    </li>
  )
}

export default ArtistDetail;
