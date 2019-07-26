import axios from 'axios';

const DOGGO_API_BASE_URL = 'https://dog.ceo/api/';

export const fetchRandomDoggos = dogs => {
  let numberOfDogs = 1;

  if (dogs > 1) {
    numberOfDogs = dogs;
  }

  const actionDispatch = async dispatch => {
    try {
      dispatch({ type: 'FETCH_DOGGOS' });

      const response = await axios.get(`${DOGGO_API_BASE_URL}breeds/image/random/${numberOfDogs}`);
      const { message } = await response.data;

      dispatch({
        type: 'FETCH_DOGGOS_SUCCESSFUL',
        payload: message
      });
    } catch (err) {
      dispatch({
        type: 'FETCH_DOGGOS_FAILED',
        payload: err
      });
    }
  };
  return actionDispatch;
};

export const fetchDoggos = (breed, subBreed) => {
  console.log('fetch dogs numberOfDoggos: ', breed);
  console.log('fetch dogs numberOfDoggos: ', subBreed);

  let hasSubBreed;

  if (subBreed) {
    hasSubBreed = `/${subBreed}`;
  } else {
    hasSubBreed = null;
  }

  const actionDispatch = async dispatch => {
    try {
      dispatch({ type: 'FETCH_DOGGOS' });

      const response = await axios.get(`${DOGGO_API_BASE_URL}breed/${breed}${hasSubBreed}/images/`);
      const { message } = await response.data;

      dispatch({
        type: 'FETCH_DOGGOS_SUCCESSFUL',
        payload: message
      });
    } catch (err) {
      dispatch({
        type: 'FETCH_DOGGOS_FAILED',
        payload: err
      });
    }
  };
  return actionDispatch;
};
