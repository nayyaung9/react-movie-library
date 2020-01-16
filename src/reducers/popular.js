import { POPULAR_MOVIES_REQUEST, POPULAR_MOVIE_DETAIL_REQUEST } from '../constants/actionTypes';

const initialState = {
  popular: [],
  singlePopular: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case POPULAR_MOVIES_REQUEST:
      return {
        ...state,
        popular: action.payload
      }
    case POPULAR_MOVIE_DETAIL_REQUEST:
      return {
        ...state,
        singlePopular: action.payload
      }
    default:
      return state;
  }
}