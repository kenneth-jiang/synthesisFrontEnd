import { headers } from '../authorization/headers';

const Url = "http://localhost:3000/api/v1"

export function fetchSongs(songSearchTerm, cb) {
  fetch(`${Url}/songs?q=${songSearchTerm}`, { headers: headers() })
}

export function fetchArtists(artistSearchTerm) {
  fetch(`${Url}/artists?q=${artistSearchTerm}`, { headers: headers() })
}

export function fetchRelatedArtists(relatedArtists) {
  fetch(`${Url}/related_artists?q=${relatedArtists}`, { headers: headers() })
}
