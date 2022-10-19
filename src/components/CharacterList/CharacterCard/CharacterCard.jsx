import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <div className="card m-2">
      <Link to={`/character/${props.id}`}>
        <img className="card-img-top" src={props.image} alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">Name: {props.name}</h5>
          <p className="card-text">Status: {props.status}</p>
        </div>
      </Link>
    </div>
  );
};

export default CharacterCard;
