import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import { Grid, Column } from 'semantic-ui-react'

import Related from './../components/Related';
import Results from './../components/Results';
import SearchBar from './../components/SearchBar';
import User from './../components/User';

import { fetchProfile } from './../actions/fetchProfile';
import { fetchSong } from './../actions/fetchSong';

import { headers } from '../authorization/headers';

const LoginButton = () => {
  return (
    <div>
      <Button basic color="teal" href='http://localhost:3000/api/v1/login'>Log In</Button>
    </div>
  )
}

const Here = () => <div>I am logged in</div>

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
      artist: "",
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

  componentDidMount() {
    fetch("https://api.spotify.com/v1/me", { headers: headers() })
      .then(resp => resp.json())
      .then(json => this.setState({ currentUser: json.display_name }, () => console.log(this.state.currentUser)))
  }

  handleCode = router => {
    if (localStorage.getItem("token")) {
      router.history.push("/here")
    } else {
      const code =  JSON.stringify({ code: router.location.search.split("?code=")[1]})

      fetch('http://localhost:3000/api/v1/home',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body:code
      }
    )
    .then(res => res.json())
    .then(data=> {
      const {username,code} = data
      localStorage.setItem("token", code);
      this.setState({username},()=> router.history.push("/here"))
    })
    return null
  }
  return null
}

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    }, fetchSong(this.state.searchTerm))
  }

  handleClick = (event) => {
    return event.target.name === "song" ? this.setState({ isSong: true }) : this.setState({ isSong: false });
  }

  render() {
    const { currentUser, searchTerm, isSong, song, topTracks } = this.state;

    return (
      <div>
      <Route exact path="/login" component={LoginButton} />
      <Route exact path="/home" component={this.handleCode} />
      <Route exact path="/here" component={Here} />
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
