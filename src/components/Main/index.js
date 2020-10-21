import React from 'react';
import styled from 'styled-components';
import ProductDescription from './ProductDescription';
import ProductImage from './ProductImage';
import logo from './../../images/logo-main.png';

const MainWrapper = styled.div`
  width: 100%;
  margin-bottom: 110px;
  @media all and (max-width: 500px) {
    margin-bottom: 0;
  }
`;

const MainContainer = styled.main`
  max-width: 1200px;
  padding: 0 55px;
  margin: auto;
  height: 100%;
  display: flex;
  @media all and (max-width: 930px) {
    flex-direction: column;
    align-items: center;
  }
  @media all and (max-width: 600px) {
    padding: 0 10px;
  }
`;

const Logo = styled.div`
  display: none;
  @media all and (max-width: 500px) {
    display: block;
  }
`;

const Main = () => {
  return (
    <MainWrapper>
      <MainContainer>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <ProductImage />
        <ProductDescription />
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
      </MainContainer>
    </MainWrapper>
  );
};

export default Main;
