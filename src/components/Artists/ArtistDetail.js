import React from 'react';
import { Image } from 'semantic-ui-react';
import ArtistTopSong from './ArtistTopSong';

const ArtistDetail = props => {
  return (
    <li key={props.artistResult.id}>
      <ul>
        <Image src={props.artistResult.images[2].url} width="120" height="120" />
        {props.artistResult.name}
        <br />
        Number of Followers: {props.artistResult.followers.total}
        <br />
        Popularity: {props.artistResult.popularity}%
        <br />
        Top Songs:
        <ArtistTopSong artistId={props.artistResult.id} playSongSnippet={props.playSongSnippet}/>
        <br />
      </ul>
    </li>
  )
}

export default ArtistDetail;
