import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Image, Menu } from 'semantic-ui-react';

const NavbarDesktop = ({ leftItems, rightItems }) => (
  <Menu fixed="top" inverted>
    <Menu.Item>
      <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
    </Menu.Item>
    {_.map(leftItems, item => (
      <Menu.Item {...item} />
    ))}
    <Menu.Menu position="right">
      {_.map(rightItems, item => (
        <Menu.Item {...item} />
      ))}
    </Menu.Menu>
  </Menu>
);

NavbarDesktop.propTypes = {
  leftItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  rightItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default NavbarDesktop;
