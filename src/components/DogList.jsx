import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Grid, Image } from 'semantic-ui-react';

const StyledImage = styled(Image)`
  margin: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
`;

const DogList = ({ doggos }) => {
  return (
    <Fragment>
      <h1>Doggo Results</h1>
      <Grid stackable>
        {doggos.map(doggo => (
          <Grid.Column key={doggo} mobile={16} tablet={8} computer={4}>
            <StyledImage fluid rounded src={doggo} />
          </Grid.Column>
        ))}
      </Grid>
    </Fragment>
  );
};

DogList.propTypes = {
  doggos: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default DogList;
