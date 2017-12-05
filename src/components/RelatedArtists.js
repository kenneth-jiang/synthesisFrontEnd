import React from 'react';

const RelatedArtists = (props) => {
  if (props.isRelated) {
    return (
      <div>
        <h1 align="center">Related Artists</h1>
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
  } else {
    return (
      <div>
      <h1 align="center">Top Tracks</h1>
      <ol>
        {props.topTracks.map((topTrack) => {
          return (
            <li key={topTrack.id}>
              Name: {topTrack.name}
              <br />
              Album: {topTrack.album.name}
              <br />
              <a href={topTrack.preview_url}>Preview</a>
              <br /><br />
            </li>
          )
        })}
      </ol>
      </div>
    )
  }
}

export default RelatedArtists;
