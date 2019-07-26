import React, { Fragment } from 'react';

import { Container, Divider } from 'semantic-ui-react';

import Navbar from './Navbar';
import SearchForm from './SearchForm';
import DogListContainer from './DogListContainer';
import Footer from './Footer';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <SearchForm />
        <Divider />
        <DogListContainer />
      </Container>
      <Footer />
    </Fragment>
  );
};

export default App;
