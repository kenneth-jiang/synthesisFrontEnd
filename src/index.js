import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import SpotifyContainer from './containers/SpotifyContainer.js';

const MyApp = ()=>(
  <Router>
    <SpotifyContainer />
  </Router>
)

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);
