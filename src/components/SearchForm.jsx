import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Form, Select, Button } from 'semantic-ui-react';

import { fetchDoggos } from '../store/actions/doggoActions';
import { fetchBreeds, fetchSubBreeds } from '../store/actions/breedActions';

class DoggoSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: '',
      subBreed: ''
    };
    this.handleBreedSelectChange = this.handleBreedSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { FETCH_BREEDS } = this.props;
    FETCH_BREEDS();
  }

  handleBreedSelectChange = (e, { value }) => {
    const { FETCH_SUB_BREEDS, BREEDS } = this.props;
    this.setState({ breed: value }, () =>
      FETCH_SUB_BREEDS(value)
        .then(() => {
          if (BREEDS.subBreeds.length > 0) {
            return this.setState({ hasSubBreed: true });
          }
        })
        .catch(err => console.log('something bad happened: ', err))
    );
  };

  handleSubBreedSelectChange = (e, { value }) => {
    this.setState({ subBreed: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { FETCH_DOGGOS } = this.props;
    const { breed, subBreed } = this.state;
    console.log('get some doggos: ', e);
    console.log('breed: ', this.state.breed);
    console.log('subbreed: ', this.state.subBreed);
    FETCH_DOGGOS(breed, subBreed);
  };

  render() {
    console.log('this state: ', this.state);
    const {
      BREEDS: { breeds, subBreeds }
    } = this.props;

    const { breed, subBreed } = this.state;
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
          <Form.Field
            control={Select}
            label="By Breed"
            options={breeds}
            value={breed}
            onChange={this.handleBreedSelectChange}
          />
          <Form.Field
            control={Select}
            label="Sub-Breed"
            options={subBreeds}
            disabled={!subBreeds.length}
            onChange={this.handleSubBreedSelectChange}
          />
          <Form.Field
            label="Fetch Doggos"
            control={Button}
            disabled={!breed}
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
