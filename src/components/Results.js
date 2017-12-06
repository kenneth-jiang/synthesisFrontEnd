import React from 'react';
import ArtistsList from './Artists/ArtistsList';

const Results = (props) => {
  if (props.isSong) {
    return (
      <div>
      <h1 align="center">Track Results</h1>
        <br />
        <ol>
        {props.songResults.map((songResult) => {
          return (
            <li key={songResult.id}>
              <ul>

                Name: {songResult.name}
                <br />

                Artist(s): {songResult.artists.map((artist) => {
                  return (
                    <ul key={artist.id}>
                      <li key={artist.id} id={artist.id}>
                        {artist.name}
                        <div onClick={props.handleArtistId} id={artist.id}>Related Artists</div>
                        <div onClick={props.handleTopTracks} id={artist.id}>Top Tracks</div>
                      </li>
                    </ul>
                  )
                })}
              </ul>
              <br />
            </li>
          )
        })}
        </ol>
      </div>
    )
  } else {
    return (
      <div>
        <ArtistsList artistResults={props.artistResults} playSongSnippet={props.playSongSnippet}/>
      </div>
    )
  }
}

export default Results;
