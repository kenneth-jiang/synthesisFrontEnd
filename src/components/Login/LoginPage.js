import React from 'react';

import { Button } from 'semantic-ui-react'


const LoginButton = () => {
  return (
    <div>
      <Button basic color="teal" href='http://localhost:3000/api/v1/login'>Log In</Button>
    </div>
  )
}

export default LoginButton;
