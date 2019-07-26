import React from 'react';
import styled from 'styled-components';

import { Image, Popup, Menu } from 'semantic-ui-react';

import Logo from '../assets/images/logo.svg';
import RandomSearchButton from './RandomSearchButton';
import AboutModal from './AboutModal';

const StyledImage = styled(Image)`
  @media screen and (min-width: 500px) {
    margin-right: 0.5rem;
  }
`;

const StyledParagraph = styled.p`
  display: none;
  @media screen and (min-width: 500px) {
    display: block;
  }
`;

const Navbar = () => {
  const rightLink = (
    <Menu.Item>
      <RandomSearchButton />
    </Menu.Item>
  );

  return (
    <Menu inverted>
      <Menu.Item>
        <StyledImage size="mini" src={Logo} />
        <StyledParagraph>FetchDoggos</StyledParagraph>
      </Menu.Item>
      <AboutModal />
      <Menu.Menu position="right">
        <Popup content="Retrieves  1 - 10 random doggos" trigger={rightLink} />
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
