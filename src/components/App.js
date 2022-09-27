import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

const [listings, setListings] = useState([])
const [search, setSearch] = useState("")

useEffect(() => {
  fetch('http://localhost:6001/listings')
  .then((res) => res.json())
  .then((data) => setListings(data))
}, [])

// console.log(listings)
const handleDelete = (listing) => {

  const newListing = listings.filter((listObj) => listObj.id !== listing.id) 
  setListings(newListing) 
};
// console.log(listings)
  return (
    <div className="app">
      <Header />
      <ListingsContainer handleDelete={handleDelete} listings={listings} />
    </div>
  );
}

export default App;
