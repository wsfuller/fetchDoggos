import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from 'semantic-ui-react';

import { fetchRandomDoggos } from '../store/actions/doggoActions';

const RandomSearchButton = ({ FETCH_RANDOM_DOGGOS }) => {
  return (
    <div>
      <Button primary onClick={() => FETCH_RANDOM_DOGGOS(3)}>
        Fetch Random Doggo(s)
      </Button>
    </div>
  );
};

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
