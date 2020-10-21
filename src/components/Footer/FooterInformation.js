import React from 'react';
import styled from 'styled-components';

const FooterInformationWrapper = styled.div`
  display: flex;
  color: white;
  @media all and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Connect = styled.div`
  width: 50%;
  & h3 {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    font-family: auto;
    margin-bottom: 20px;
  }
  & p {
    font-size: 10px;
    margin-bottom: 20px;
  }
  @media all and (max-width: 600px) {
    width: 100%;
  }
`;

const MailForm = styled.form`
  display: flex;
  color: white;
  height: 40px;
  & input[type='text'] {
    width: 100%;
    padding-left: 10px;
  }
  & input[type='submit'] {
    width: 170px;
    padding-left: 10px;
    color: white;
    background: #c2c2c2;
    border: none;
  }
  @media all and (max-width: 500px) {
    & input[type='submit'] {
      width: 100px;
    }
  }
`;

const Explore = styled.div`
  width: 50%;
  padding-left: 20px;
  & h3 {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    font-family: auto;
    margin-bottom: 20px;
  }
  & p {
    color: #99a1c4;
    font-size: 10px;
  }
  @media all and (max-width: 600px) {
    width: 100%;
    padding-left: 0;
  }
`;

const Footer = () => {
  return (
    <FooterInformationWrapper>
      <Connect>
        <h3>connect</h3>
        <p>Join our mailing list for updates</p>
        <MailForm>
          <input placeholder="Enter Email Address" type="text" name="name" />
          <input type="submit" value="Join"></input>
        </MailForm>
      </Connect>
      <Explore>
        <h3>Explore</h3>
        <p>Search</p>
        <p>How to find us</p>
        <p>email us asoni@asoni.ch or call us +41 43 433 21 00</p>
      </Explore>
    </FooterInformationWrapper>
  );
};

export default Footer;
