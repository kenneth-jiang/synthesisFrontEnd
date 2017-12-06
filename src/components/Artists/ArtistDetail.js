import React from 'react';
import { Image } from 'semantic-ui-react';
import ArtistTopSong from './ArtistTopSong';

const renderArtistTopSong = (props) => {
  console.log(props)
  return (
    <ArtistTopSong artistId={props.artistResult.id} playSongSnippet={props.playSongSnippet} />
  )
}

const ArtistDetail = props => {
  return (
    <li key={props.artistResult.id}>
      <ul>
        {props.artistResult.images.length !== 0 ? <Image src={props.artistResult.images[2].url} width="120" height="120" /> : null}
        {props.artistResult.name}
        <br />
        Number of Followers: {props.artistResult.followers.total}
        <br />
        Popularity: {props.artistResult.popularity}%
        <br />
        <div onClick={renderArtistTopSong}>
          Top Songs:
        </div>
        <br />
      </ul>
    </li>
  )
}

export default ArtistDetail;
