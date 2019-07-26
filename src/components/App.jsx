import React from 'react';

import Navbar from './Navbar';
import RandomSearchButton from './RandomSearchButton';
import SearchForm from './SearchForm';
import DogListContainer from './DogListContainer';

const App = () => {
  const leftItems = [
    { as: 'a', content: 'Home', key: 'home' },
    { as: 'a', content: 'Users', key: 'users' }
  ];
  const rightItems = [
    { as: 'a', content: 'Login', key: 'login' },
    { as: 'a', content: 'Register', key: 'register' }
  ];
  return (
    <div className="App">
      <Navbar leftItems={leftItems} rightItems={rightItems}>
        <h1>fetchDoggos</h1>
        <RandomSearchButton />
        <SearchForm />
        <DogListContainer />
      </Navbar>
    </div>
  );
};

export default App;
