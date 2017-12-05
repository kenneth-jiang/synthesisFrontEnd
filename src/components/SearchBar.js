import React from 'react';

import { Button } from 'semantic-ui-react'

const SearchBar = (props) => {
  return (
    <div align="center">
      <Button basic color="teal" name="song" onClick={props.handleClick}>Search Tracks</Button>
      <Button basic color="red" name="artist" onClick={props.handleClick}>Search Artists</Button>

      <br />
      <br />
      {props.isSong ?
        (<form name="song" onSubmit={props.handleSubmit} onChange={props.handleChange} >
          <div className="ui action input" value={props.songSearchTerm}>
            <input placeholder="Search for a Track"/>
            <button className="ui icon button"><i className="search icon" /></button>
          </div>
        </form>)
        :
        (<form name="artist" onSubmit={props.handleSubmit} onChange={props.handleChange}>
          <div className="ui action input" value={props.artistSearchTerm}>
            <input placeholder="Search for an Artist"/>
            <button className="ui icon button"><i className="search icon" /></button>
          </div>
        </form>)
      }
    </div>
  )
}

export default SearchBar;
