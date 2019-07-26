import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { Form, Select, Button } from 'semantic-ui-react';

import { fetchDoggos } from '../store/actions/doggoActions';
import { fetchBreeds, fetchSubBreeds } from '../store/actions/breedActions';

const StyledH1 = styled.h1`
  margin: 1rem auto !important;
  text-align: center;
`;

class DoggoSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfDoggos: 1,
      numberOfDoggosError: false,
      breed: '',
      subBreed: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { FETCH_BREEDS } = this.props;
    FETCH_BREEDS();
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'numberOfDoggos') {
      if (value < 1 || value > 10) {
        this.setState({ [name]: value, numberOfDoggosError: true });
      } else {
        this.setState({ [name]: value, numberOfDoggosError: false });
      }
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSelectChange = (e, { name, value }) => {
    const { FETCH_SUB_BREEDS, BREEDS } = this.props;

    if (name === 'breed') {
      this.setState({ [name]: value, subBreed: '' }, () => {
        FETCH_SUB_BREEDS(value)
          .then(() => {
            if (BREEDS.subBreeds.length > 0) {
              return this.setState({ hasSubBreed: true });
            }
          })
          .catch(err => console.log('something bad happened: ', err));
      });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { FETCH_DOGGOS } = this.props;
    const { numberOfDoggos, breed, subBreed } = this.state;
    FETCH_DOGGOS(numberOfDoggos, breed, subBreed);
  };

  render() {
    const {
      BREEDS: { breeds, subBreeds }
    } = this.props;

    const { numberOfDoggos, numberOfDoggosError, breed } = this.state;
    return (
      <Form>
        <StyledH1>Doggo Search</StyledH1>
        <Form.Group widths="equal">
          <Form.Field
            name="numberOfDoggos"
            label="Number of Doggos"
            placeholder="Up to 10"
            control="input"
            type="number"
            value={numberOfDoggos}
            min={1}
            max={10}
            onChange={this.handleChange}
            error={numberOfDoggosError}
          />
          <Form.Field
            name="breed"
            control={Select}
            label="By Breed"
            options={breeds}
            value={breed}
            onChange={this.handleSelectChange}
          />
          <Form.Field
            name="subBreed"
            control={Select}
            label="Sub-Breed"
            options={subBreeds}
            disabled={!subBreeds.length}
            onChange={this.handleSelectChange}
          />
          <Form.Field
            label="Fetch Doggos"
            control={Button}
            disabled={!breed || numberOfDoggosError}
            onClick={this.handleSubmit}
          >
            Submit
          </Form.Field>
        </Form.Group>
      </Form>
    );
  }
}

DoggoSearch.propTypes = {
  FETCH_DOGGOS: PropTypes.func.isRequired,
  FETCH_BREEDS: PropTypes.func.isRequired,
  FETCH_SUB_BREEDS: PropTypes.func.isRequired,
  BREEDS: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => ({
  BREEDS: state.breeds
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      FETCH_DOGGOS: fetchDoggos,
      FETCH_BREEDS: fetchBreeds,
      FETCH_SUB_BREEDS: fetchSubBreeds
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoggoSearch);
