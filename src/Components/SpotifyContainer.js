import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { Route } from 'react-router-dom';
import SpotifyLandingPage from './SpotifyLandingPage.js'

const button = () => {
  return (
    <div>
      <Button href="http://localhost:3000/api/v1/login" basic color="teal">Log In</Button>
    </div>
  )
}

class SpotifyContainer extends Component {
  render() {
    return (
      <div>
        <Route exact path="/login" component={button} />
      </div>
    )
  }
}

export default SpotifyContainer;
