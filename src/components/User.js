import React from 'react';
import { Button } from 'semantic-ui-react'

const User = (props) => {
  return (
    <div>
      Logged In As: <strong>{props.currentUser}</strong>
      <br />
      <Button basic color="teal" onClick={() => alert("Should log you out!")}>Log Out</Button>
    </div>
  )
}

export default User;
