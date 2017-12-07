import React from 'react';
import { withRouter } from 'react-router'
import { Button } from 'semantic-ui-react'


const User = (props) => {
  const logOut = () =>{
    localStorage.clear()
    props.history.push("/login")
  }
  return (
    <div>
      {localStorage.length !== 0 ?
        <div>
          Logged In As: <Button basic color="yellow" onClick={() => alert(`${props.currentUser} is currently logged in`)}>{props.currentUser}</Button>
          <Button basic color="teal" onClick={logOut}>Log Out</Button>
        </div>
        : null}
    </div>
  )
}

export default withRouter(User);
