import React from "react";
import DeleteButton from "../deleteButton/DeleteButton"
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
        <DeleteButton/>
      </div>
    </div>
  );
}

export default Card;
