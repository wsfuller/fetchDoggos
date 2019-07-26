import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Form, Select, Button } from 'semantic-ui-react';

import { fetchBreeds } from '../store/actions/breedActions';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' }
];

class DoggoSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subBreed: false
    };
  }

  componentDidMount() {
    const { FETCH_BREEDS } = this.props;
    FETCH_BREEDS();
  }

  render() {
    const {
      BREEDS: { breeds }
    } = this.props;

    const { subBreed } = this.state;
    return (
      <Form>
        <h1>Doggo Search</h1>
        <Form.Group widths="equal">
          <Form.Field
            label="Number of Doggos"
            placeholder="Up to 10"
            control="input"
            type="number"
            min={1}
            max={10}
          />
          <Form.Field control={Select} label="By Breed" options={breeds} />
          <Form.Field control={Select} label="Sub Breed" options={options} disabled={!subBreed} />
        </Form.Group>
      </Form>
    );
  }
}

DoggoSearch.propTypes = {
  FETCH_BREEDS: PropTypes.func.isRequired,
  BREEDS: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => ({
  BREEDS: state.breeds
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      FETCH_BREEDS: fetchBreeds
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoggoSearch);
