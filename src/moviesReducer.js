import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from './actions';

const initialState = {
  movies: [],
  loading: true,
  error: null,
};

const moviesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload
      };

    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        movies: []
      };

    default:
      return state;
  }
}

export default moviesReducer;
