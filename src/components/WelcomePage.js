import React from "react";
import styled from "styled-components";

import Header from "./Header";
import rickImage from "../assets/rick.png";

export default function WelcomePage() {
  return (
    <WelcomePageStyle className="welcome-page">
      <Header />
    </WelcomePageStyle>
  );
}
const WelcomePageStyle = styled.section`
  background-image: url(${rickImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 90vh;
`;
