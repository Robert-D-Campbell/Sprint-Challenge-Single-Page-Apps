import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader className="ui centered">
      <h1 className="ui center">WUBBA LUBBA DUB DUB!!</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: absolute;
  top: 35%;
  left: 25%;
  width: 20%;
  h1 {
    font-size: 5rem;
    color: #b5edfc;
  }
`;
