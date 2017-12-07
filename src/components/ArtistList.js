import React from 'react'
import ArtistItem from './ArtistItem'


const ArtistList = (props) => {
  const artist = props.map(artist => {
    return <ArtistItem key={} name={}/>
  })
  render() {
    return (
      <ul>
        {Artist}
      </ul>
    )
  }
}

export default ArtistList;
