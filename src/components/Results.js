import React from 'react';

const Results = (props) => {
  if (props.isSong) {
    return (
      <div>
      <h1 align="center">Songs Results</h1>
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
                      <li key={artist.id} onClick={props.handleArtistId} id={artist.id}>
                        {artist.name}
                      </li>
                    </ul>
                  )
                })}

                <a href={songResult.href}>Preview</a>

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
      <h1 align="center">Artist Results</h1>
      <br />
        <ol>
          {props.artistResults.map((artistResult) => {
            return (
              <li key={artistResult.id}>
                <ul>
                  {artistResult.name}
                  <br />
                  Genres:
                    <ol>
                      {artistResult.genres.map((genre) => {
                        return (
                          <li key={genre}>
                            {genre}
                          </li>
                        )
                      })}
                    </ol>
                    <br />
                </ul>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

export default Results;
