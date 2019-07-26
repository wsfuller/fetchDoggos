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

export const fetchDoggos = () => {
  console.log('fetch dogs');
};
