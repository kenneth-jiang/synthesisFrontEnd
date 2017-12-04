import React from 'react';

const Results = (props) => {
  if (props.isSong) {
    return (
      <div>
        <ol>
        {props.songResults.map((songResult) => {
          return (
            <li key={songResult.id}>
              <ul>{songResult.name} <a href={songResult.href}>Preview</a></ul>
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
