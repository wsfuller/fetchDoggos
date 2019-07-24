import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';

const DogList = ({ doggos }) => {
  console.log('dog list doggos: ', doggos);
  return (
    <Card.Group itemsPerRow={4}>
      {doggos.map(doggo => (
        <Card raised key={doggo} image={doggo} />
      ))}
    </Card.Group>
  );
};

DogList.propTypes = {
  doggos: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default DogList;
