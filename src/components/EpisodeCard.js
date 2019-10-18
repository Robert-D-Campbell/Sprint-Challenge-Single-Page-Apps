import React from "react";
import styled from "styled-components";

const EpisodeCard = props => {
  return (
    <CardStyle className="episode-card">
      <h1> {props.name}</h1>
      <h2>Air Date: {props.air_date}</h2>
      <h3>Episode: {props.episode}</h3>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 20%;
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
  }
  h3 {
    margin: 0;
    font-size: 2rem;
    color: #00b0c8;
    font-family: "Long Cang", cursive;
  }
`;

export default EpisodeCard;
