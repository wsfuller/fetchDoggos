import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { Button } from 'semantic-ui-react';

import { fetchRandomDoggos } from '../store/actions/doggoActions';

const StyledButton = styled(Button)`
  font-size: 75% !important;
  @media screen and (min-width: 330px) {
    font-size: 100% !important;
  }
`;

const RandomSearchButton = ({ FETCH_RANDOM_DOGGOS }) => (
  <StyledButton primary onClick={() => FETCH_RANDOM_DOGGOS(3)}>
    Fetch Random Doggo(s)
  </StyledButton>
);

RandomSearchButton.propTypes = {
  FETCH_RANDOM_DOGGOS: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      FETCH_RANDOM_DOGGOS: fetchRandomDoggos
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(RandomSearchButton);
