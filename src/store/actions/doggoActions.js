import axios from 'axios';

const DOGGO_API_BASE_URL = 'https://dog.ceo/api/breed/';

const fetchDoggos = () => {
  const actionDispatch = async dispatch => {
    try {
      dispatch({ type: 'FETCH_DOGGOS' });

      const response = await axios.get(`${DOGGO_API_BASE_URL}`);
      const { results } = await response.data;

      dispatch({
        type: 'FETCH_DOGGOS_SUCCESSFUL',
        payload: results
      });
    } catch (err) {
      dispatch({
        type: 'FETCH_DOGGOS_FAILED',
        payload: err
      });
    }

    return actionDispatch;
  };
};

export default fetchDoggos;
