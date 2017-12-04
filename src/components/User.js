import React from 'react';
import { Button } from 'semantic-ui-react'

const User = (props) => {
  return (
    <div>
      Logged In As: <Button basic color="yellow" onClick={() => alert("Should link to a profile page!")}>{props.currentUser}</Button>
      <Button basic color="teal" onClick={() => alert("Should log you out!")}>Log Out</Button>
    </div>
  )
}

export default User;
