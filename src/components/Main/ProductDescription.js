import React from 'react';
import styled from 'styled-components';
import ProductTabs from './ProductTabs';

import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';

const ProductDescriptionWrapper = styled.div`
  width: 90%;
  @media all and (max-width: 500px) {
    width: 100%;
  }
`;

const ProductPrice = styled.p`
  width: 100%;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  margin-left: 24px;
  margin-bottom: 25px;
  @media all and (max-width: 500px) {
    margin-left: 0;
    text-align: center;
  }
`;

const ProductButtons = styled.div`
  margin-left: 24px;
  display: flex;
  @media all and (max-width: 500px) {
    margin-left: 0;
    justify-content: space-around;
  }
`;

const ProductButtonsButton = styled.button`
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const ProductDescription = () => {
  return (
    <ProductDescriptionWrapper>
      <ProductTabs />
      <ProductPrice>CHF129.00</ProductPrice>
      <ProductButtons>
        <ProductButtonsButton className="btn">
          previous step
        </ProductButtonsButton>
        <ProductButtonsButton className="btn primary">
          next step
        </ProductButtonsButton>
      </ProductButtons>
    </ProductDescriptionWrapper>
  );
};

export default ProductDescription;
