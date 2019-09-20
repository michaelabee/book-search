import React from "react";
import "./card.css";
import API from "../../api/api"

function Card({name, author, image, description}) {
  
  return (
    <div className="cardStyle">
      <div>
        <h1>{name}</h1>
        <h3>{author}</h3>
        <img src={image} alt={name}></img>
        <p>{description}</p>
   
        <button className="buttons" onClick={(key) => {
          API.saveBook({
            googleId: key,
            title: name,
            author: author,
            description: description,
            image: image})
            .then(() => this.searchBooks());
        }}>Save Book</button>
      </div>
    </div>
  );
}

export default Card;
