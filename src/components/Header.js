import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader className="ui centered">
      <h1 className="ui center">WUBBA LUBBA DUB DUB!!</h1>
      <sm>( I am in great pain, please help me... )</sm>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: absolute;
  top: 35%;
  left: 25%;
  max-width: 60%;
  width: 485px;
  h1 {
    font-size: 5rem;
    color: #b5edfc;
    margin-bottom: 2%;
  }
  sm {
    color: #b5edfc;
  }
`;
