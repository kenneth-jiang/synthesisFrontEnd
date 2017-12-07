import React from 'react';
import TrackDetail from './TrackDetail';

const TopTracksList = (props) => {
  return (
    <div>
      <h1 align="center"><u>Top Tracks</u></h1>
      <ol>
        {props.topTracks.map((trackDetail) => <TrackDetail fetchRelatedArtists={props.fetchRelatedArtists} trackDetail={trackDetail} handleUri={props.handleUri} />)}
      </ol>
    </div>
  )
}

export default TopTracksList;
