import React from "react";
import "./card.css";

function Card() {
  return (
    <div className="card">
      <div>
        <h1>Book Title</h1>
        <h3>Author</h3>
        <p>Tagline</p>
        <p>Book Description</p>
        <button>View</button>
        <button>Delete (x)</button>
      </div>
    </div>
  );
}

export default Card;
