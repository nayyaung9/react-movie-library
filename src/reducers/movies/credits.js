import { GET_MOVIE_DETAIL_CREDIT_SUCCESS } from '../../constants/actionTypes';

const initialState = {
  casts: [],
  crews: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_MOVIE_DETAIL_CREDIT_SUCCESS:
      return {
        ...state,
        casts: action.casts,
        crews: action.crews 
      }
    default:
      return state;
  }
}