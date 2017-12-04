import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App'

import SpotifyContainer from './containers/SpotifyContainer.js';

const MyApp = ()=>(
  <Router>
    <App />
  </Router>
)

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);
