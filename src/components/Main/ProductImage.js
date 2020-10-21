import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import mainImg from './../../images/main-img.png';
import { Stage, Layer, Image } from 'react-konva';

import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';

const ProductImageWrapper = styled.div`
  width: 60%;
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
  const [image, setImage] = useState(new window.Image());

  useEffect(() => {
    const img = new window.Image();
    img.src =
      'https://cdn1.savepice.ru/uploads/2020/10/21/e297cec76067920f3e62439c3cfdb1b2-full.png';
    setImage(img);
  }, []);

  return (
    <ProductImageWrapper>
      <Stage width="360" height="500">
        <Layer>
          <Image x={-10} y={0} image={image} />
        </Layer>
      </Stage>
    </ProductImageWrapper>
  );
};

export default ProductImage;
