import jwt_decode from 'jwt-decode';

export function headers() {
    let decoded = jwt_decode(localStorage.getItem('token'))

    return {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + decoded.access_token
    }
  }
