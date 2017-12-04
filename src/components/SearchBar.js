import React from 'react';

import { Button } from 'semantic-ui-react'

const SearchBar = (props) => {
  return (
    <div align="center">
      <Button basic color="teal" name="song">Song</Button>
      <Button basic color="red" name="artist">Artist</Button>
      <br />
      <br />
      {props.isSong ?
        (<form name="song" onSubmit={props.handleSubmit} >
          <input value={props.songSearchTerm} onChange={props.handleChange} />
          <button value="submit">Submit</button>
        </form>)
        :
        (<form name="artist" onSubmit={props.handleSubmit} >
          <input value={props.artistSearchTerm} onChange={props.handleChange} />
          <button value="submit">Submit</button>
        </form>)
      }
    </div>
  )
}

export default SearchBar;
