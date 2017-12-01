import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react'

const form = () => {
  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

class SpotifyLandingPage extends Component {
  render() {
    return (
      <div>
        <Route exact path="/synthesis" component={form}/>
      </div>
    )
  }
}

export default SpotifyLandingPage;
