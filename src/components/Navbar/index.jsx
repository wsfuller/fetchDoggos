import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Responsive } from 'semantic-ui-react';

import NavbarDesktop from './Desktop';
import NavbarMobile from './Mobile';
import NavbarChildren from './Children';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handlePusher = this.handlePusher.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handlePusher() {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  }

  handleToggle() {
    const { visible } = this.state;

    return this.setState({ visible: !visible });
  }

  render() {
    const { children, leftItems, rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavbarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavbarChildren>{children}</NavbarChildren>
          </NavbarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavbarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavbarChildren>{children}</NavbarChildren>
        </Responsive>
      </div>
    );
  }
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
  leftItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  rightItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Navbar;
