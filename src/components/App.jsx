import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Container, Divider } from 'semantic-ui-react';

import Navbar from './Navbar';
import SearchForm from './SearchForm';
import DogListContainer from './DogListContainer';
import Footer from './Footer';

const StyledContainer = styled(Container)`
  min-height: 100vh;
`;

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <StyledContainer>
        <SearchForm />
        <Divider />
        <DogListContainer />
      </StyledContainer>
      <Footer />
    </Fragment>
  );
};

export default App;
