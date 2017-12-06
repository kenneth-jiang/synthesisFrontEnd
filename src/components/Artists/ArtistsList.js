import React from 'react';
import ArtistDetail from './ArtistDetail';

const ArtistsList = props => {
  return (
    <div>
    <h1 align="center">Artist Results</h1>
    <br />
      <ol>
        {props.artistResults.map((artistResult) => {
          return (
            <div key={artistResult.id}>
              <ArtistDetail artistResult={artistResult} playSongSnippet={props.playSongSnippet}/>
            </div>
          )
        })}
      </ol>
    </div>
  )
}

export default ArtistsList;
