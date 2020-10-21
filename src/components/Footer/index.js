import React from 'react';
import styled from 'styled-components';
import FooterInformation from './FooterInformation';
import { mdiFacebook, mdiTwitter, mdiPinterest, mdiInstagram } from '@mdi/js';
import Icon from '@mdi/react';
import pay from '../../images/pay.png';
import amex from '../../images/amex.png';
import mastercard from '../../images/mastercard.png';
import twint from '../../images/twint.png';
import pp from '../../images/pp.png';
import visa from '../../images/visa.png';

const FooterWrapper = styled.div`
  width: 100%;
  background: #040c4d;
  letter-spacing: 1px;
`;

const FooterContainer = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: 30px 55px;
  @media all and (max-width: 500px) {
    padding: 30px 10px;
  }
`;

const FooterSocialConnect = styled.div`
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
`;

const FooterPay = styled.div`
  margin: 50px auto 30px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  @media all and (max-width: 500px) {
    width: auto;
    max-width: 260px;
  }
`;

const FooterCopyright = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  & span {
    text-transform: uppercase;
    color: #99a1c4;
    font-size: 8px;
  }
`;

const Footer = () => {
  let media = window.matchMedia('(min-width: 500px)');

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterInformation />
        <FooterSocialConnect>
          <Icon
            сlassName="inverted"
            path={mdiFacebook}
            title="Login Dropdown"
            size={1.5}
            color="#b2b7cf"
          />
          {media.matches ? (
            <>
              <a>
                <Icon
                  path={mdiTwitter}
                  title="Login Dropdown"
                  size={1.5}
                  color="#b2b7cf"
                />
              </a>
              <a>
                <Icon
                  path={mdiPinterest}
                  title="Login Dropdown"
                  size={1.5}
                  color="#b2b7cf"
                />
              </a>
            </>
          ) : (
            <a>
              <Icon
                path={mdiInstagram}
                title="Login Dropdown"
                size={1.5}
                color="#b2b7cf"
              />
            </a>
          )}
        </FooterSocialConnect>
        <FooterPay>
          <img src={amex} alt="amex"></img>
          <img src={pay} alt="pay"></img>
          <img src={mastercard} alt="mastercard"></img>
          <img src={pp} alt="pp"></img>
          <img src={twint} alt="twint"></img>
          <img src={visa} alt="visa"></img>
        </FooterPay>
        <FooterCopyright>
          <span>
            &copy; 2019 artigianobyasoni_chf U+00B7 powered by shopify
          </span>
        </FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
