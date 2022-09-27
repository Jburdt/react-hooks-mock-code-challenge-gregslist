import React, { useState} from "react";

function ListingCard({id, image, description, location, handleDelete}) {
  
  const [liked, setLiked] = useState(false);
 
  
  const handleDeleteClick = (id) => {
  fetch(`http://localhost:6001/listings/${id}`, {
    method:'DELETE'
  })
  .then((res) => res.json())
  .then(()=> console.log('deleted'))
}

// const handleDeletedQuestion = (id) => {
//   fetch(`http://localhost:4000/questions/${id}`, {
//     method:'DELETE',
//   })
//   .then(res => res.json())
//   .then(() => {
//     const updatedQuestions = questions.filter((question) => question.id !== id )
//     setQuestions(updatedQuestions)
//   })
// };

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
