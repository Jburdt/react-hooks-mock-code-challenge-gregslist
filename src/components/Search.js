import React, { useState } from "react";

function Search({  clickSubmit}) {

  const [ value, setValue ] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("submitted");
    clickSubmit(value)
    setValue('')
  }

const handleSearch = (e) => {
  // setSearchTerm(e.target.value)
  setValue(e.target.value)
};

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={value}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
