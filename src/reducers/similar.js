import { GET_SIMILAR_MOVIE_REQUEST } from '../constants/actionTypes';

const initialState = {
  similar: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_SIMILAR_MOVIE_REQUEST:
      return {
        similar: action.payload
      }
    default:
      return state;
  }
}