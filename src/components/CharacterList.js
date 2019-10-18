import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(res => {
          const data = res.data.results.filter(character =>
            character.name.toLowerCase().includes(query.toLowerCase())
          );
          console.log(data);
          setCharacters(data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getCharacters();
  }, [query]);

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <CharacterGrid className="character-list">
      <div className="search-container">
        <form className="search">
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="search-name"
            placeholder="Search by Name"
            autoComplete="off"
            size="30"
          />
        </form>
      </div>
      {characters.map((char, index) => {
        return (
          <CharacterCard
            key={index}
            image={char.image}
            name={char.name}
            gender={char.gender}
            status={char.status}
            species={char.species}
          />
        );
      })}
    </CharacterGrid>
  );
}

const CharacterGrid = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .search-container {
    margin: 5%;
    display: flex;
    justify-content: center;
    width: 100%;
    .search-name {
      box-shadow: 3px 3px 8px #00b0c8;
      background: transparent;
      border: 2px solid #c4da5b;
      border-radius: 8px;
      height: 30px;
      color: #c4da5b;
      padding-left: 5%;
    }
  }
`;
