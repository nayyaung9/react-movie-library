import { UPCOMING_MOVIES_REQUEST, UPCOMING_MOVIES_SUCCESS, UPCOMING_MOVIE_DETAIL_REQUEST } from '../constants/actionTypes';

const initialState = {
  upcoming: [],
  singleUpcoming: {},
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case UPCOMING_MOVIES_REQUEST:
      return {
        ...state,
        loading: action.payload
      }
    case UPCOMING_MOVIES_SUCCESS:
      return {
        ...state,
        upcoming: action.payload
      }
    case UPCOMING_MOVIE_DETAIL_REQUEST:
      return {
        ...state,
        singleUpcoming: action.payload
      }
    default:
      return state;
  }
}