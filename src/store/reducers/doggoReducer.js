const initialState = {
  doggos: [],
  fetching: true,
  error: false,
  errorMessage: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DOGGOS': {
      return {
        ...state,
        fetching: true,
        doggos: [],
        error: false
      };
    }
    case 'FETCH_CACHED_DOGGOS_SUCCESSFUL': {
      return {
        ...state,
        fetching: false,
        doggo: action.payload
      };
    }
    case 'FETCH_DOGGOS_FAILED': {
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
