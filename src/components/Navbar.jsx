import React from 'react';
import styled from 'styled-components';

import { Image, Popup, Menu } from 'semantic-ui-react';

import Logo from '../assets/images/logo.svg';
import RandomSearchButton from './RandomSearchButton';
import AboutModal from './AboutModal';

const StyledImage = styled(Image)`
  margin-right: 0.5rem;
`;

const Navbar = ({ item }) => {
  const rightLink = (
    <Menu.Item>
      <RandomSearchButton />
    </Menu.Item>
  );

  return (
    <Menu inverted>
      <Menu.Item>
        <StyledImage size="mini" src={Logo} />
        FetchDoggos
      </Menu.Item>
      <AboutModal />
      <Menu.Menu position="right">
        <Popup content="Retrieves  1 - 10 random doggos" trigger={rightLink} />
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
