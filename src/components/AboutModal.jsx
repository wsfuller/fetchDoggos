import React from 'react';
import styled from 'styled-components';

import { Header, Image, Menu, Modal } from 'semantic-ui-react';

const StyledLink = styled.a`
  margin-left: 0.25rem;
`;

const AboutModal = () => (
  <Menu inverted>
    <Modal trigger={<Menu.Item>About</Menu.Item>}>
      <Modal.Header>About FetchDoggos</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src="/images/avatar/large/rachel.png" />
        <Modal.Description>
          <Header>Description</Header>
          <p>
            While looking for a fun project to work on with some user interactivity, I was wondering
            if there was an API for dogs. Much to my surprise I found the
            <StyledLink href="https://dog.ceo" target="_blank" rel="noopener noreferrer">
              DOG API
            </StyledLink>
          </p>
          <p>FetchDoggos is an application that uses the power of </p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  </Menu>
);

export default AboutModal;
