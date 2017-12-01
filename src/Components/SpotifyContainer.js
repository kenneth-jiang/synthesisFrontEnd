import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { Route } from 'react-router-dom';

const button = () => {
  return (
    <Button as="a" href="http://localhost:3000/api/v1/login">Log In</Button>
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
