import React from 'react';
import styled from 'styled-components';
import mainImg from './../../images/main-img.png';

import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';

const ProductImageWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
`;

const ProductImageThumb = styled.img`
  @media all and (max-width: 500px) {
    display: block;
    width: 90vw;
  }
`;

const ProductImage = () => {
  return (
    <ProductImageWrapper>
      <ProductImageThumb src={mainImg} />
    </ProductImageWrapper>
  );
};

export default ProductImage;
