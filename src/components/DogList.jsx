import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';

const DogList = ({ doggos }) => {
  return (
    <Fragment>
      <h1>Doggo Results</h1>
      <Card.Group itemsPerRow={4}>
        {doggos.map(doggo => (
          <Card raised key={doggo} image={doggo} />
        ))}
      </Card.Group>
    </Fragment>
  );
};

DogList.propTypes = {
  doggos: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default DogList;
