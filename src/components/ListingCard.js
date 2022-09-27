import React, { useState} from "react";

function ListingCard({id, image, description, location, handleDelete}) {
  
  const [liked, setLiked] = useState(false);
 //deletes from server
  const handleDeleteClick = () => {
  fetch(`http://localhost:6001/listings/${id}`, {
    method:'DELETE',
  })
  handleDelete(id)
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {liked ? (
          <button onClick={() => setLiked(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setLiked(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
