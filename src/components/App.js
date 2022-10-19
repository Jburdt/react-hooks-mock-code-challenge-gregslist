import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

const [listings, setListings] = useState([])
const [searchTerm, setSearchTerm] = useState("")

//Search filter then pass to the original state
const filteredTerms = listings.filter((listObj) => { 
  return listObj.description.toLowerCase().includes(searchTerm.toLowerCase())
})

const clickSubmit = (term) => {
  setSearchTerm(term)
}


//grabs form api to put on page
useEffect(() => {
  fetch('http://localhost:6001/listings')
  .then((res) => res.json())
  .then((data) => setListings(data))
}, [])

//deletes form listngs
const handleDelete = (id) => {

  const newListing = listings.filter((listObj) => listObj.id !== id) 
  setListings(newListing) 
};
// console.log(listings)
  return (
    <div className="app">
      <Header clickSubmit={clickSubmit} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ListingsContainer handleDelete={handleDelete} listings={filteredTerms} />
    </div>
  );
}

export default App;
