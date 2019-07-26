import axios from 'axios';
import collection from 'lodash/collection';

const DOGGO_API_BASE_URL = 'https://dog.ceo/api/';

export const fetchBreeds = () => {
  console.log('fetch breeds');

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

export const fetchSubBreeds = () => {
  console.log('fetch sub breeds');
};

const options = [
  { key: 'm', text: 'Affenpinscher', value: 'affenpinscher' },
  { key: 'f', text: 'African', value: 'african' },
  { key: 'o', text: 'Airedale', value: 'airedale' }
];
