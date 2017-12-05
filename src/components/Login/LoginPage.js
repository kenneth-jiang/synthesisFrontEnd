import React from 'react';

import { Button } from 'semantic-ui-react'


const LoginButton = () => {
  return (
    <div>
      <Button basic color="teal" href='https://synthesis-k3.herokuapp.com/api/v1/login'>Log In</Button>
    </div>
  )
}

export default LoginButton;
