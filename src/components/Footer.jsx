import React from 'react';
import styled from 'styled-components';

import { Container, Image } from 'semantic-ui-react';

import logo from '../assets/images/wsf-logo.svg';

const StyledFooter = styled.footer`
  margin-top: 5rem;
  padding: 8rem 1rem;
  background: #212121;
`;

const StyledFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

const StyledBranding = styled.a`
  width: auto;
  height: 1.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  color: #ffffff;
  opacity: 0.75;
  transition: opacity 0.35s ease-in-out;

  @media screen and (min-width: 500px) {
    margin-bottom: 0;
  }

  &:hover {
    color: #ffffff;
    opacity: 1;
  }
`;

const StyledLogo = styled(Image)`
  max-width: 1.75rem !important;
  margin-right: 0.5rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterContent>
          <StyledBranding
            href="https://wsfuller.dev"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
            rel="noopener"
          >
            <StyledLogo
              fluid
              src={logo}
              alt="William S Fuller Logo, blue background white foreground showing symbol for metal music"
            />
            <span>Built by William S Fuller</span>
          </StyledBranding>

          <div>
            &copy;
            {`${new Date().getFullYear()} All Rights Reserved`}
          </div>
        </StyledFooterContent>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
