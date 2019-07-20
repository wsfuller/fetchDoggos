import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Image, Icon, Menu, Sidebar, Segment } from 'semantic-ui-react';

const NavbarMobile = ({ children, leftItems, onPusherClick, onToggle, rightItems, visible }) => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible={visible}
      width="thin"
    >
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="gamepad" />
        Games
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="camera" />
        Channels
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher dimmed={visible} onClick={onPusherClick} style={{ minHeight: '100vh' }}>
      <Segment basic>
        <Menu fixed="top" inverted>
          <Menu.Item>
            <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
          </Menu.Item>
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Menu position="right">
            {_.map(rightItems, item => (
              <Menu.Item {...item} />
            ))}
          </Menu.Menu>
        </Menu>
        {children}
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

NavbarMobile.propTypes = {
  children: PropTypes.node.isRequired,
  leftItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  rightItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onPusherClick: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

export default NavbarMobile;

// import React from 'react';
// import PropTypes from 'prop-types';
// import _ from 'lodash';

// import { Image, Icon, Menu, Sidebar, Segment } from 'semantic-ui-react';

// const NavbarMobile = ({ children, leftItems, onPusherClick, onToggle, rightItems, visible }) => (
//   <Sidebar.Pushable as={Segment}>
//     <Sidebar
//       as={Menu}
//       animation="overlay"
//       icon="labeled"
//       inverted
//       items={leftItems}
//       vertical
//       visible={visible}
//     />
//     <Sidebar.Pusher dimmed={visible} onClick={onPusherClick} style={{ minHeight: '100vh' }}>
//       <Menu fixed="top" inverted>
//         <Menu.Item>
//           <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
//         </Menu.Item>
//         <Menu.Item onClick={onToggle}>
//           <Icon name="sidebar" />
//         </Menu.Item>
//         <Menu.Menu position="right">
//           {_.map(rightItems, item => (
//             <Menu.Item {...item} />
//           ))}
//         </Menu.Menu>
//       </Menu>
//       {children}
//     </Sidebar.Pusher>
//   </Sidebar.Pushable>
// );

// NavbarMobile.propTypes = {
//   children: PropTypes.node.isRequired,
//   leftItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//   rightItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//   onPusherClick: PropTypes.func.isRequired,
//   onToggle: PropTypes.func.isRequired,
//   visible: PropTypes.bool.isRequired
// };

// export default NavbarMobile;
