import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Dimmer, Loader } from 'semantic-ui-react';

import { fetchRandomDoggos } from '../store/actions/doggoActions';
import DogList from './DogList';

class DogListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { FETCH_RANDOM_DOGGOS } = this.props;
    FETCH_RANDOM_DOGGOS(2);
  }

  render() {
    const {
      DOGGOS: { fetching, error, doggos }
    } = this.props;
    let content;

    if (fetching) {
      content = (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    } else if (error) {
      content = <h1>There was an error</h1>;
    } else {
      content = <DogList doggos={doggos} />;
    }

    return content;
  }
}

DogListContainer.propTypes = {
  FETCH_RANDOM_DOGGOS: PropTypes.func.isRequired,
  DOGGOS: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => ({
  DOGGOS: state.doggos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      FETCH_RANDOM_DOGGOS: fetchRandomDoggos
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogListContainer);
