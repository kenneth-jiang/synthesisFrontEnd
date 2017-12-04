import React from 'react';

import { Button } from 'semantic-ui-react'

const SearchBar = (props) => {
  return (
    <div align="center">
      <Button basic color="teal" name="song" onClick={props.handleClick}>Song</Button>
      <Button basic color="red" name="artist" onClick={props.handleClick}>Artist</Button>
      <br />
      <br />
      {props.isSong ?
        (<form name="song" onSubmit={props.handleSubmit}>
          <div className="ui action input" value={props.songSearchTerm} onChange={props.handleChange}>
            <input type="text" placeholder="Search for a Song"/>
            <button className="ui icon button">
              <i className="search icon"></i>
            </button>
          </div>
        </form>)
        :
        (<form name="artist" onSubmit={props.handleSubmit}>
          <div className="ui action input" value={props.artistSearchTerm} onChange={props.handleChange}>
            <input type="text" placeholder="Search for an Artist"/>
            <button className="ui icon button" value="submit">
              <i className="search icon"></i>
            </button>
          </div>
        </form>)
      }
    </div>
  )
}

export default SearchBar;
