import React from 'react';
import { Button } from 'semantic-ui-react';

const RandomButton = ({ randomDoggo }) => (
  <Button primary onClick={randomDoggo}>
    Get Random Doggo
  </Button>
);

export default RandomButton;
