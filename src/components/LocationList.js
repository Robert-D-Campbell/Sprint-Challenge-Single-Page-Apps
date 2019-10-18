import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import LocationCard from "./LocationCard";
export default function LocationsList() {
  const [locations, setLocations] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getLocations = () => {
      axios
        .get("https://rickandmortyapi.com/api/location/")
        .then(res => {
          const data = res.data.results.filter(location =>
            location.name.toLowerCase().includes(query.toLowerCase())
          );
          console.log(data);
          setLocations(data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getLocations();
  }, [query]);

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <LocationGrid className="location-list">
      <div className="search-container">
        <form className="search">
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="search-location"
            placeholder="Search by Name"
            autoComplete="off"
          />
        </form>
      </div>
      {locations.map((loc, index) => {
        return (
          <LocationCard
            key={index}
            name={loc.name}
            type={loc.type}
            dimension={loc.dimension}
            residents={loc.residents.length}
          />
        );
      })}
    </LocationGrid>
  );
}

const LocationGrid = styled.section`
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
