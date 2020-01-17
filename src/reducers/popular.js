import { POPULAR_MOVIES_REQUEST, POPULAR_MOVIE_DETAIL_REQUEST, POPULAR_MOVIE_DETAIL_SUCCESS } from '../constants/actionTypes';

const initialState = {
  popular: [],
  loading: false,
  singlePopular: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case POPULAR_MOVIES_REQUEST:
      return {
        ...state,
        popular: action.payload
      }
    case POPULAR_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        singlePopular: action.payload
      }
    case POPULAR_MOVIE_DETAIL_REQUEST:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
}