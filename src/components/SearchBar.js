import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
          <div className="field">
              <label>Video Search</label>
              <input
                onChange={(event) => setTerm(event.target.value)}
                value={term}
                type="text"
              />
          </div>
      </form>
    </div>
  )
};

export default SearchBar;
