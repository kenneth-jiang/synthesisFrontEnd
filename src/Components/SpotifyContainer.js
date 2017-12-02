import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import { Grid, Column } from 'semantic-ui-react'
import Related from './Related';
import Results from './Results';
import SearchBar from './SearchBar';
import User from './User';

const button = () => {
  return (
    <Button onClick={handleClick}>Log In</Button>
  )
}

const handleClick = () => {
  fetch("http://localhost:3000/api/v1/login")
    .then(resp => resp.json())
    .then(resp => console.log(resp))
}

class SpotifyContainer extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: "Laura",
      searchTerm: "",
      isSong: true,
      song: {
        name: "Shake It Off",
        artist: "Taylor Swift",
        length: "3.39",
        releaseDate: "August 18, 2014",
        genre: "pop",
        album: "1989",
        img: "https://upload.wikimedia.org/wikipedia/en/c/c4/Taylor_Swift_-_Shake_It_Off.png",
      },
      topTracks: ["Love Story", "I Knew You Were Trouble", "You Belong To Me"],
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    })
    // want to pass in a callback to fetch data from api as we are typing
    // makes two fetches, one to either inputted song/artist and one to related artists
  }

  handleClick = (event) => {
    return event.target.name === "song" ? this.setState({ isSong: true }) : this.setState({ isSong: false });
  }

  render() {
    const { currentUser, searchTerm, isSong, song, topTracks } = this.state;

    return (
      <div>
      <Grid>
        <User currentUser={currentUser} />
      </Grid>
      <Grid>
        <SearchBar searchTerm={searchTerm} isSong={isSong} handleClick={this.handleClick} handleChange={this.handleChange} />
      </Grid>
      <Grid>
        <Results song={song}/>
      </Grid>
      <Grid>
        <Related topTracks={topTracks} searchTerm={searchTerm} />
      </Grid>
      </div>
    )
  }
}

export default SpotifyContainer;
