import React from "react";
import { createGlobalStyle } from "styled-components";

import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AppRouter />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  background: #262C3A; 
}
body {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: 'Permanent Marker', cursive;
  }
img {
  max-width: 100%;
  box-shadow: 3px 3px 8px #00b0c8;
  border-radius: 50%;
}
`;

export default App;
