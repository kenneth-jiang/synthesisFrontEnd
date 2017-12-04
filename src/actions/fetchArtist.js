import { headers } from '../authorization/headers';

export function fetchArtist(searchTerm) {
  fetch(`https://api.spotify.com/v1/search?query=artist:${searchTerm}`, { headers: headers() })
    .then(resp => resp.json())
    .then(data => this.setState({ artist: data }))
}
