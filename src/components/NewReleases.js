import React from 'react';

const Related = (props) => {
  return (
    <div>
      {props.topTracks.map((track)=> {
        return (
          <ul>
          {track}
          </ul>
        )
      })}
    </div>
  )
}

export default Related;
