import { headers } from '../authorization/headers';

export function fetchProfile() {
  fetch("https://api.spotify.com/v1/me", { headers: headers() })
    .then(resp => resp.json())
    .then(json => this.setState({ currentUser: json.display_name }))
}
