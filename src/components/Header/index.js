import React from 'react';
import styled from 'styled-components';
import logo from './../../images/logo.png';
import NavPanel from './NavPanel';
import SocialIcons from './SocialIcons';

import Icon from '@mdi/react';
import { mdiMenu, mdiHome, mdiAccount, mdiCart } from '@mdi/js';

const HeaderWrapper = styled.div`
  width: 100%;
  height 85px;
  margin-bottom: 50px;
  @media all and (max-width: 720px) {
    height 35px;
  }
  @media all and (max-width: 500px) {
    margin-bottom: 0;
  }
`;

const HeaderContainer = styled.header`
  max-width: 1200px;
  padding: 0 55px;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  @media all and (max-width: 720px) {
    padding: 0 10px;
    justify-content: space-between;
    width: 70%;
  }
  @media all and (max-width: 500px) {
    width: 230;
  }
`;

const Logo = styled.div`
  margin-right: 50px;
  @media all and (max-width: 850px) {
    margin-right: 0;
  }
`;

const Burger = styled.a`
  display: flex;
  align-items: center;
`;

const Cart = styled.a`
  display: flex;
  align-items: center;
  & > * {
    margin-left: 5px;
  }
`;

const Header = () => {
  let media = window.matchMedia('(min-width: 720px)');
  return (
    <HeaderWrapper>
      <HeaderContainer>
        {media.matches ? (
          <>
            <Logo>
              <img src={logo} alt="logo" />
            </Logo>
            <NavPanel />
            <SocialIcons />
          </>
        ) : (
          <>
            <Burger>
              <Icon
                path={mdiMenu}
                title="Login Dropdown"
                size={0.8}
                color="#535353"
              />
              MENU
            </Burger>
            <a>
              <Icon
                path={mdiHome}
                title="Login Dropdown"
                size={0.8}
                color="#535353"
              />
            </a>
            <a>
              <Icon
                path={mdiAccount}
                title="Login Dropdown"
                size={0.8}
                color="#535353"
              />
            </a>
            <Cart>
              MY CART
              <Icon
                path={mdiCart}
                title="Login Dropdown"
                size={0.8}
                color="#535353"
              />
              <span>0</span>
            </Cart>
          </>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
