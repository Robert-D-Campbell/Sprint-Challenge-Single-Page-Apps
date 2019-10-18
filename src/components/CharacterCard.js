import React from "react";
import styled from "styled-components";

const CharacterCard = props => {
  return (
    <CardStyle className="character-card">
      <img
        className="character-img"
        alt="Rick and Morty Character Portrait"
        src={props.image}
      />
      <h1>{props.name}</h1>
      <h3>{props.gender}</h3>
      <h2>Status: {props.status}</h2>
      <h3>Species: {props.species}</h3>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 100%;
  flex-wrap: wrap;
  align-content: center;
  border: 3px solid #c4da5b;
  box-shadow: 3px 3px 8px #00b0c8;
  border-radius: 5px;
  margin: 2%;
  .character-img {
    width: 50%;
    margin: 5% auto;
  }
  h1 {
    margin: 0;
    color: #00b0c8;
    font-size: 3rem;
  }
  h2 {
    margin: 0;
    color: #00b0c8;
    font-size: 2rem;
    text-shadow: -1px -1px 0 #c4da5b, 1px -1px 0 #c4da5b, -1px 1px 0 #c4da5b,
      1px 1px 0 #c4da5b;
  }
  h3 {
    margin: 0;
    font-size: 2rem;
    color: #00b0c8;
    font-family: "Long Cang", cursive;
  }
`;

export default CharacterCard;
