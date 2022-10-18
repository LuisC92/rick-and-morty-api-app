import React from "react";

const SearchBar = ({handleChange, searchValue}) => {

  return (
    <div>
      <h2>Search</h2>
      <input type="search" value={searchValue} 
      placeholder='Search your favorite character'
      onChange={handleChange}/>
    </div>
  );
};

export default SearchBar;
