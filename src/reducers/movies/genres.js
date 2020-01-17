import { GET_GENRE_TYPE_LIST_REQUEST } from '../../constants/actionTypes';

const initialState = {
  genres: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_GENRE_TYPE_LIST_REQUEST:
      return {
        genres: action.payload
      }
    default:
      return state;
  }
}