import React from 'react';
import { Route } from 'react-router-dom'
import AuthorizationPage from '../components/1 Login/AuthorizationPage';
import '../app.css'

class App extends React.Component {
  render() {
    return (
      <Route path="/" component={AuthorizationPage} />
    )
  }
}

export default App;
