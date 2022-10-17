import React, { useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard/CharacterCard";

const CharacterList = () => {
  // save data in state
  const [characters, setCharacters] = useState([]);
  // fetch api
  const getCharacters = () => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => setCharacters(response.data.results));
  };
  // check data -> check!
  // render inside cards
  return (
    <div>
      <h1>CharacterList</h1>
      <button onClick={() => getCharacters()}>Fetch Characters</button>
      {characters.map((character) => (
        <CharacterCard {...character} key={character.id}/>
      ))}
    </div>
  );
};

export default CharacterList;
