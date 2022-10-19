import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  //* save data fetched in a state
  const [characters, setCharacters] = useState([]);

  const { id } = useParams();
  //* fetch Api endpoint using axios.get
  const getCharacters = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${parseInt(id)}`)
      .then((response) => setCharacters(response.data));
  };

  //* when the components mount, fetch data from the Api
  useEffect(() => {
    getCharacters();
  }, []);
  // console.log("params",parseInt(id))
  console.log("character id",characters.name)
  return (
    <div>
      <h1>Character Details</h1>
     { characters? <div className="card m-2" key={characters.id}>
        <img
          className="card-img-top"
          src={characters.image}
          alt={characters.name}
        />
        <div className="card-body">
          <h5 className="card-title">Name: {characters.name}</h5>
          <p className="card-text">Status: {characters.status}</p>
          <p className="card-text">Species: {characters.species}</p>
          <p className="card-text">Location: {characters.location.name}</p>
        </div>
      </div>:null}
    </div>
  );
};

export default CharacterDetails;
