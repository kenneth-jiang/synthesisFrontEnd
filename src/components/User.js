import React from 'react';

const User = (props) => {
  return (
    <div>
      Logged In As: <strong>{props.currentUser}</strong>
    </div>
  )
}

export default User;
