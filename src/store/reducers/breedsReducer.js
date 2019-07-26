const initialState = {
  breeds: [],
  subBreeds: [],
  fetching: true,
  error: false,
  errorMessage: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_BREEDS': {
      return {
        ...state,
        fetching: true,
        breeds: [],
        subBreeds: [],
        error: false
      };
    }
    case 'FETCH_BREEDS_SUCCESSFUL': {
      return {
        ...state,
        fetching: false,
        error: false,
        errorMessage: '',
        breeds: action.payload
      };
    }
    case 'FETCH_BREEDS_FAILED': {
      return {
        ...state,
        fetching: false,
        error: true,
        errorMessage: String(action.payload)
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
