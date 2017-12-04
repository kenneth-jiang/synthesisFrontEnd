import React from 'react';

const Results = (props) => {
  console.log(props)
  return (
    <div>
      <ol>
      {props.results.map((result) => {
        return (
          <li key={result.id}>
            <ul>{result.name} <a href={result.href}>Preview</a></ul>
            <br />
          </li>
        )
      })}
      </ol>
    </div>
  )
}

export default Results;
