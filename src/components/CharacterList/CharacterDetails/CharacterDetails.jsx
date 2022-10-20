import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const CharacterDetails = () => {
  //* save data fetched in a state
  const [character, setCharacter] = useState([]);
  const { name, location, origin, gender, image, status, species } = character;

  const { id } = useParams();

  //* fetch Api endpoint using axios.get
  const getCharacters = async () => {
    let data = await axios
      .get(`https://rickandmortyapi.com/api/character/${(id)}`)
      setCharacter(data.data);
  };

//   //* when the components mount, fetch data from the Api
  useEffect(() => {
    getCharacters();
  }, [id]);
  return (
    <div>
      <div>
<Link to="/characters-list">Back</Link>
      <h1>Character Details</h1>
      </div>
     <div className="card m-2">
        <img
          className="card-img-top"
          src={image}
          alt={name}
        />
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <p className="card-text">Status: {status}</p>
          <p className="card-text">Species: {species}</p>
          <p className="card-text">Location: {location?.name}</p>
          <p className="card-text">Gender: {gender}</p>
          <p className="card-text">Origin: {origin?.name}</p>
        </div>
      </div>

    </div>
  );
};

export default CharacterDetails;
