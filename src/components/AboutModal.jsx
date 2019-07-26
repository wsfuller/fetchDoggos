import React from 'react';
import styled from 'styled-components';

import { Header, Image, Menu, Modal } from 'semantic-ui-react';

import Remy from '../assets/images/remy.png';
import Remy2x from '../assets/images/remy@2x.png';

const StyledImage = styled(Image)`
  width: 10.375rem;
  height: 10.375rem;
`;

const StyledLink = styled.a`
  margin: 0 0.25rem;
`;

const AboutModal = () => (
  <Menu inverted>
    <Modal closeIcon trigger={<Menu.Item>About</Menu.Item>}>
      <Modal.Header>About FetchDoggos</Modal.Header>
      <Modal.Content image>
        <StyledImage
          wrapped
          rounded
          size="medium"
          src={Remy}
          srcSet={`${Remy2x} 2x`}
          alt="Illustration of Boston Terrier"
        />
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
