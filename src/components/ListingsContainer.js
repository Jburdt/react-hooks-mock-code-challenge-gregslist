import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete}) {
// console.log(listings)
  return (
    <main>
      <ul className="cards">
        {listings.map((list) => (
           <ListingCard 
           handleDelete={handleDelete} 
           description={list.description} 
           location={list.location} 
           image={list.image} 
           key={list.id} 
           id={list.id}/>))
          }
      </ul>
    </main>
  );
}

export default ListingsContainer;


