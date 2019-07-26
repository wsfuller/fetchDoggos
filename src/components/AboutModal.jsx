import React from 'react';
import styled from 'styled-components';

import { Header, Image, Menu, Modal } from 'semantic-ui-react';

import Remy from '../assets/images/remy.png';

const StyledLink = styled.a`
  margin: 0 0.25rem;
`;

const AboutModal = () => (
  <Menu inverted>
    <Modal trigger={<Menu.Item>About</Menu.Item>}>
      <Modal.Header>About FetchDoggos</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src={Remy} />
        <Modal.Description>
          <Header>Description</Header>
          <p>
            One day at the dog park playing with Remy, my Boston Terrier, I wondered if there was an
            API for dogs. To my surprise there was the
            <StyledLink href="https://dog.ceo" target="_blank" rel="noopener noreferrer">
              DOG API
            </StyledLink>
            that would allow users to search for random dog images.
          </p>
          <p>
            The goal of this project was to create a project working more with forms and experiement
            with a new framework besides Material UI.
          </p>
          <p>
            FetchDoggos is built using React, Redux, Semantic UI React, Styled Components, GitHub,
            and Netlify.
          </p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  </Menu>
);

export default AboutModal;
