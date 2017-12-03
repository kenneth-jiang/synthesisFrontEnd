import jwt_decode from 'jwt-decode';

export function headers() {
    let decoded = jwt_decode(localStorage.getItem('token'))
    console.log(decoded.access_token)
    return {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + decoded.access_token
    }
  }
