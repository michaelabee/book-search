import React from "react";
import "./card.css";

function Card(props) {
  console.log(props.image, "propsimage");
  return (
    <div className="card">
      <div>
        <h1>{props.name}</h1>
        <h3>{props.author}</h3>
        <img src={props.image} alt={props.name}></img>
        <p>{props.description}</p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}

export default Card;
