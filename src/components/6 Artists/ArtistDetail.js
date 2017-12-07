import React from 'react';
import { Image, Button } from 'semantic-ui-react';

const ArtistDetail = props => {
  return (
    <li key={props.artistResult.id}>
      <ul>
        {props.artistResult.name}
        {/*name*/}
        {props.artistResult.images.length !== 0 && props.artistResult.images[2] !== undefined ? <Image src={props.artistResult.images[2].url} width="120" height="120" /> : null}<br/>
        {/*if image then image, else nothing*/}
        Followers: {props.artistResult.followers.total}<br/>
        {/*followers*/}
        Popularity: {props.artistResult.popularity}<br/><br/>
        {/*popularity*/}
        <Button size="mini" onClick={props.fetchRelatedArtists} value={props.artistResult.id}>Related Artists</Button><br/>
        {/*related artists*/}
        <Button size="mini" onClick={props.fetchTopTracks} value={props.artistResult.id}>Top Songs</Button><br/>
        {/*artist top songs*/}
        <br/><br/>
      </ul>
    </li>
  )
}

export default ArtistDetail;
