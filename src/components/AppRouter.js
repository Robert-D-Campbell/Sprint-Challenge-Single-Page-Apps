import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import styled from "styled-components";

import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationList from "./LocationList";
import EpisodeList from "./EpisodeList";

export default function AppRouter() {
  return (
    <>
      <NavigationStyle className="main-nav">
        <ul className="nav-links">
          <li className="nav-li">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink className="nav-link" to="/characters">
              Characters
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink className="nav-link" to="/locations">
              Locations
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink className="nav-link" to="/episodes">
              Episodes
            </NavLink>
          </li>
        </ul>
      </NavigationStyle>
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/characters" component={CharacterList} />
        <Route path="/locations" component={LocationList} />
        <Route path="/episodes" component={EpisodeList} />
      </Switch>
    </>
  );
}
const NavigationStyle = styled.nav`
    font-size: 3rem;
    height: 10vh;
    background-color: none;
    .nav-links {
        display:flex;
        justify-content: center;
        list-style: none;
        width: 100%;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0;
        .nav-li {
            margin: 2% 5% 0px;
        }
        .nav-link {
            font-weight: 700;
            text-decoration: none;
            color: #00B0C8;
            text-shadow:
                -1px -1px 0 #C4DA5B,  
                1px -1px 0 #C4DA5B,
                -1px 1px 0 #C4DA5B,
                1px 1px 0 #C4DA5B;
        }
    }
  }
`;
