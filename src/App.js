import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const AppWrapper = styled(React.Fragment)``;

const GlobalStyle = createGlobalStyle`
  body li {
    list-style: none;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  .btn {
    border: none;
    margin-right: 20px;
    width: 177px;
    height: 40px;
    letter-spacing: 2px;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    border: 2px solid;
    outline: none;
    @media all and (max-width: 500px) {
      margin-right: 0px;
      width: 150px;
    }
  }

  .btn.primary {
    background: blue;
    color: white;
    background: black;
    border: none;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Main />
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;
