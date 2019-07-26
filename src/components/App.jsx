import React from 'react';

import { Container, Divider } from 'semantic-ui-react';

import Navbar from './Navbar';
import SearchForm from './SearchForm';
import DogListContainer from './DogListContainer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <SearchForm />
        <Divider />
        <DogListContainer />
      </Container>
    </div>
  );
};

export default App;
