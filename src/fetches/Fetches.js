import { headers } from '../authorization/headers';

const localhostUrl = "http://localhost:3000/api/v1"

export function fetchSongs(songSearchTerm, cb) {
  fetch(`${localhostUrl}/songs?q=${songSearchTerm}`, { headers: headers() })
}

export function fetchArtists(artistSearchTerm) {
  fetch(`${localhostUrl}/artists?q=${artistSearchTerm}`, { headers: headers() })
}

export function fetchRelatedArtists(artistId) {
  fetch(`${localhostUrl}/related_artists?q=${relatedArtists}`, { headers: headers() })
}

export function fetchTopTracks(artistId) {
  fetch(`http://localhost:3000/api/v1/top_tracks?q=${ArtistId}`, { headers: headers() })
}
