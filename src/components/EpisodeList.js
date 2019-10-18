import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getEpisodes = () => {
      axios
        .get("https://rickandmortyapi.com/api/episode/")
        .then(res => {
          const data = res.data.results.filter(episode =>
            episode.name.toLowerCase().includes(query.toLowerCase())
          );
          console.log(data);
          setEpisodes(data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getEpisodes();
  }, [query]);

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <EpisodeGrid className="episode-list">
      <div className="search-container">
        <form className="search">
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="search-episode"
            placeholder="Search by Name"
            autoComplete="off"
          />
        </form>
      </div>
      {episodes.map((episode, index) => {
        return (
          <EpisodeCard
            key={index}
            name={episode.name}
            air_date={episode.air_date}
            episode={episode.episode}
          />
        );
      })}
    </EpisodeGrid>
  );
}

const EpisodeGrid = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .search-container {
    margin: 5%;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
