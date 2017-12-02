import React from 'react';

const Results = (props) => {
  return (
    <div>
      <ul>Name: {props.song.name}</ul>
      <ul>Artist: {props.song.artist}</ul>
      <ul>Length: {props.song.length}</ul>
      <ul>Release Date: {props.song.releaseDate}</ul>
      <ul>Genre: {props.song.genre}</ul>
      <ul>Album: {props.song.album}</ul>
      <img src={props.song.img}/>
    </div>
  )
}

export default Results;
