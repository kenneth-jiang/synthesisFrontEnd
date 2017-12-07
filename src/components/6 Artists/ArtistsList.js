import React from 'react';
import ArtistDetail from './ArtistDetail';

const ArtistsList = props => {
  return (
    <div>
      <h1 align="center">Artists</h1>
      <ol>
        {props.artistResults.map((artistResult) => {
          return (
            <ArtistDetail
              artistResult={artistResult}
              fetchRelatedArtists={props.fetchRelatedArtists}
              fetchTopTracks={props.fetchTopTracks}
              playSongSnippet={props.playSongSnippet}
            />
          )
        })}
      </ol>
    </div>
  )
}

export default ArtistsList;
