import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { Route } from 'react-router-dom';
import SpotifyLandingPage from './SpotifyLandingPage.js'

const LoginButton = () => {
  return (
    <div>
      <Button basic color="teal" href='http://localhost:3000/api/v1/login'>Log In</Button>
    </div>
  )
}

const Here = () => <div>I am logged in</div>


class SpotifyContainer extends Component {

  constructor(){
    super()
    this.state={
      username:"",
      loggedIn: ""
    }
  }

  handleCode = router =>{
    if (localStorage.getItem("token")) {
      router.history.push("/here")
    }else{
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

  render() {
    return (
      <div>
        <Route exact path="/login" component={LoginButton} />
        <Route exact path="/home" component={this.handleCode} />
        <Route exact path="/here" component={Here} />
      </div>
    )
  }
}

export default SpotifyContainer;
