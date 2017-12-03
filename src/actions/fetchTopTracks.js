import { headers } from '../authorization/headers';

export function fetchTopTracks(searchTerm) {
  fetch(`https://api.spotify.com/v1/search?query=track:${searchTerm}`, { headers: headers() })
    .then(resp => resp.json())
    .then(data => console.log(data))
    .then(data => this.setState({ song: data }))
}
