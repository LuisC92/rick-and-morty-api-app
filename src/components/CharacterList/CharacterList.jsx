/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard/CharacterCard";
import AddForm from "./AddForm/AddForm";
import SearchBar from "./SearchBar/SearchBar";

const CharacterList = () => {
  //* save data fetched in a state
  const [characters, setCharacters] = useState([]);
 
  const [searchValue, setSearchValue] = useState("");

  //* fetch Api endpoint using axios.get
  const getCharacters = () => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => setCharacters(response.data.results));
  };

  //* fetch the new endpoint using the value of the search
  const searchCharacter = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
      .then((response) => setCharacters(response.data.results));
  };

  //* for each value that has been insert, save it on a state
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  //* when the components mount, fetch data from the Api
  useEffect(() => {
    getCharacters();
  }, []);

  //* when the state changes, update the component
  useEffect(() => {
    searchCharacter();
  }, [searchValue]);

  //* function to change for every input


  //*/ function to submit
  const handleSubmit = (event, newCharacter) => {
    event.preventDefault();
    setCharacters([newCharacter, ...characters])
  };
  return (
    <div>
      <h1>Characters List</h1>
      {/* 
      //* 1st step use the button to fetch data on Click
      <button onClick={() => getCharacters()}>Fetch Characters</button> 
      */}
      <br />
      <br />
      <SearchBar handleChange={handleChange} searchValue={searchValue} />
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center mt-5 mb-5">
        <AddForm handleSubmit={handleSubmit}/>
        {/*//* render data inside cards using map() to iterate all elements fetched */}
        {characters.map((character) => (
          <CharacterCard {...character} key={character.id} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
