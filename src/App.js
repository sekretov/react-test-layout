import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';

const AppWrapper = styled.div`
  background: #202124;
  display: block;
`;

const GlobalStyle = createGlobalStyle`
  body li {
    list-style: none;
  }

  body ul {
    padding-inline-start: 10px;
  }
`;

function App() {
  return <AppWrapper></AppWrapper>;
}

export default App;
