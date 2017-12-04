import React from 'react';

const RelatedArtists = (props) => {
  return (
    <div>
      <ol>
      {props.relatedArtists.map((relatedArtist) => {
        return (
          <li key={relatedArtist.id}>
            Name: {relatedArtist.name}
            <br />
            Genres:
              <ol>
              {relatedArtist.genres.map((genre) => {
                return (
                  <li key={genre}>
                    {genre}
                  </li>
                )
              })}
            </ol>
            <br />
          </li>
        )
      })}
      </ol>
    </div>
  )
}

export default RelatedArtists;
