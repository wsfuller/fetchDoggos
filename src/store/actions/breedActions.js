import axios from 'axios';
import collection from 'lodash/collection';

const DOGGO_API_BASE_URL = 'https://dog.ceo/api/';

export const fetchBreeds = () => {
  const breeds = [];

  const actionDispatch = async dispatch => {
    try {
      dispatch({ type: 'FETCH_BREEDS' });

      const response = await axios.get(`${DOGGO_API_BASE_URL}breeds/list/all`);
      const { message } = await response.data;

      collection.forEach(message, (value, key) => {
        breeds.push({
          key,
          text: `${key.charAt(0).toUpperCase() + key.slice(1)}`,
          value: key
        });
      });

      dispatch({
        type: 'FETCH_BREEDS_SUCCESSFUL',
        payload: breeds
      });
    } catch (err) {
      dispatch({
        type: 'FETCH_BREEDS_FAILED',
        payload: err
      });
    }
  };
  return actionDispatch;
};

export const fetchSubBreeds = breed => {
  console.log('fetch sub breeds breh: ', breed);
  const subBreeds = [];
  const actionDispatch = async dispatch => {
    try {
      dispatch({ type: 'FETCH_SUB_BREEDS' });

      const response = await axios.get(`${DOGGO_API_BASE_URL}breed/${breed}/list`);
      const { message } = await response.data;

      collection.forEach(message, value => {
        subBreeds.push({
          key: value,
          text: `${value.charAt(0).toUpperCase() + value.slice(1)}`,
          value
        });
      });

      dispatch({
        type: 'FETCH_SUB_BREEDS_SUCCESSFUL',
        payload: subBreeds
      });
    } catch (err) {
      dispatch({
        type: 'FETCH_SUB_BREEDS_FAILED',
        payload: err
      });
    }
  };
  return actionDispatch;
};
