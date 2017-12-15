import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { headers } from '../../authorization/headers';
import LoginPage from './LoginPage';
import MainPage from '../2 Main/MainPage';


class AuthorizationPage extends Component {
  constructor(props) {
    super(props);
  }

  handleCode = router => {
    if (localStorage.getItem("token")) {
      this.props.history.push("/main")
    } else {
      fetch('https://synthesis-k3.herokuapp.com/api/v1/home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ code: this.props.location.search.split("?code=")[1] })
      })
        .then(res => res.json())
        .then(data => {
          const {currentUser, code} = data
          localStorage.setItem("token", code);
          this.setState({ currentUser: currentUser["display_name"] }, () => this.props.history.push("/main"))
        }
      )
      return null;
    }
    return null;
  }

  render() {
    return (
      <div>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/home" component={this.handleCode} />
        <Route exact path="/main" component={MainPage} />
      </div>
    )
  }
}

export default AuthorizationPage;
