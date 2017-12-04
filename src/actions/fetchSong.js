import { headers } from '../authorization/headers';

export function fetchSong(searchTerm) {
  fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, { headers: headers() })
    .then(resp => resp.json())
    .then(resp => console.log(resp))
    .then(data => this.setState({ results: data }, () => console.log(this.state.results)))

}
