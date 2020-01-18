import { GET_SIMILAR_MOVIE_REQUEST, GET_SIMILAR_MOVIE_DETAIL_SUCCESS } from '../../constants/actionTypes';

const initialState = {
  similar: [],
  singleSimilar: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_SIMILAR_MOVIE_REQUEST:
      return {
        ...state,
        similar: action.payload
      }
    case GET_SIMILAR_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        singleSimilar: action.payload
      }
    default:
      return state;
  }
}