import React from "react";
import styled from "styled-components";

const EpisodeCard = props => {
  return (
    <CardStyle className="episode-card">
      <h1>Episode: {props.episode}</h1>
      <h2>{props.name}</h2>
      <h3>Air Date: {props.air_date}</h3>
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
    margin: 2% auto 8%;
    color: #00b0c8;
    font-size: 3rem;
    text-shadow: -1px -1px 0 #c4da5b, 1px -1px 0 #c4da5b, -1px 1px 0 #c4da5b,
      1px 1px 0 #c4da5b;
  }
  h2 {
    margin: 6% auto 10%;
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

export default EpisodeCard;
