import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import productImage from '../../images/product-image.png';

const ProductCuffWrapper = styled.div`
  margin-top: 30px;
`;
const ProductCuffTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 25px;
`;

const ProductCuffDesc = styled.p`
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 20px;
  max-width: 470px;
`;

const ProductCuffImages = styled.div`
  display: flex;
`;

const Image = styled.img`
  display: block;
  margin-right: 10px;
  max-width: 145px;
  max-height: 150px;
  margin-bottom: 10px;
  @media all and (max-width: 500px) {
    width: 31%;
  }
`;

const ProductCuff = () => {
  return (
    <ProductCuffWrapper>
      <ProductCuffTitle>STEP 4 - CUFF</ProductCuffTitle>
      <ProductCuffDesc>
        At vero <u>eos et accusam</u> et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </ProductCuffDesc>
      <ProductCuffImages>
        <Tooltip title="MA Edgy" arrow>
          <Image src={productImage} />
        </Tooltip>
        <Tooltip title="MA Edgy" arrow>
          <Image src={productImage} />
        </Tooltip>
        <Tooltip title="MA Edgy" arrow>
          <Image src={productImage} />
        </Tooltip>
      </ProductCuffImages>
    </ProductCuffWrapper>
  );
};

export default ProductCuff;
