import React from 'react';
import ArtistDetail from './ArtistDetail';

const RelatedArtistsList = props => {
  return (
    <div>
      <h1 align="center">Related Artists</h1>
      <ol>
        {props.relatedArtists.map((artistResult) => {
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

export default RelatedArtistsList;
