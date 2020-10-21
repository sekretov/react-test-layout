import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@mdi/react';
import { mdiAccount, mdiMagnify, mdiCart } from '@mdi/js';

const NavPanelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 12%;
`;

export default function SocialIcons() {
  return (
    <NavPanelWrapper>
      <Icon path={mdiAccount} title="Login Dropdown" size={1} color="black" />
      <Icon path={mdiMagnify} title="Login Dropdown" size={1} color="black" />
      <Icon path={mdiCart} title="Login Dropdown" size={1} color="black" />
    </NavPanelWrapper>
  );
}
