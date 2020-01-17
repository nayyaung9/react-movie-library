import { GET_TOP_RATED_MOVIE_SUCCESS } from '../../constants/actionTypes';

const initialState = {
  top_rate_movies: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_TOP_RATED_MOVIE_SUCCESS:
      return {
        top_rate_movies: action.payload
      }
    default:
      return state;
  }
}