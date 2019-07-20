import React from 'react';

import Navbar from './Navbar';

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
        <h1>fetchDoggo</h1>
      </Navbar>
    </div>
  );
};

export default App;
