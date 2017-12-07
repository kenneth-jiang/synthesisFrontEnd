import React from 'react';
import TrackDetail from './TrackDetail';

const TracksList = (props) => {
  return (
    <div>
      <h1 align="center">Tracks</h1>
      <ol>
        {props.trackResults.map((trackDetail) => <TrackDetail trackDetail={trackDetail} fetchRelatedArtists={props.fetchRelatedArtists} handleUri={props.handleUri} />)}
      </ol>
    </div>
  )
}

export default TracksList;
