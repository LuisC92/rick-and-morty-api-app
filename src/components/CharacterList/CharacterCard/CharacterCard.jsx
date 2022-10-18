import React from "react";

const CharacterCard = (props) => {
  return (
    <div className="card m-2">
      <img className="card-img-top" src={props.image} alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">Name: {props.name}</h5>
        <p className="card-text">Status: {props.status}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
