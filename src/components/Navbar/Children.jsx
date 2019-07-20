import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'semantic-ui-react';

const NavbarChildren = ({ children }) => (
  <Container style={{ marginTop: '5em' }}>{children}</Container>
);

NavbarChildren.propTypes = {
  children: PropTypes.node.isRequired
};

export default NavbarChildren;
