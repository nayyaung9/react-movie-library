import { GET_MOVIE_LATEST_REQUEST } from '../constants/actionTypes';

export default function(state = {}, action) {
  switch(action.type) {
    case GET_MOVIE_LATEST_REQUEST:
      return {
        latest: action.payload
      }
    default:
      return state;
  }
}