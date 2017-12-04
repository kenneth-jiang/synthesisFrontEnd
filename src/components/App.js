import React from 'react';
import { Route } from 'react-router-dom'
import SpotifyContainer from '../containers/SpotifyContainer';

class App extends React.Component {
  render() {
    return (
      <Route path="/" component={SpotifyContainer} />
    )
  }
}

export default App;
