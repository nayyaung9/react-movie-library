import { GET_MOVIE_DETAIL_REVIEW } from '../constants/actionTypes';

const initialState = {
  reviews: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_MOVIE_DETAIL_REVIEW:
      return {
        reviews: action.payload
      }
    default:
      return state;
  }
}