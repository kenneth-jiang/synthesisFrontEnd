import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <label name="song">Song</label>
      <label name="artist">Artist</label>

      {props.isSong ?
        (<form name="song" >
          <input value={props.searchTerm} onChange={props.handleChange} />
        </form>)
        :
        (<form name="artist" >
          <input value={props.searchTerm} onChange={props.handleChange} />
        </form>)
      }
    </div>
  )
}

export default SearchBar;
