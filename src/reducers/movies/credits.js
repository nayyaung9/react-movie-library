import { GET_MOVIE_DETAIL_CREDIT_SUCCESS, GET_SINGLE_CREDIT_SUCCESS } from '../../constants/actionTypes';

const initialState = {
  casts: [],
  crews: [],
  singleCredit: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_MOVIE_DETAIL_CREDIT_SUCCESS:
      return {
        ...state,
        casts: action.casts,
        crews: action.crews 
      }
    case GET_SINGLE_CREDIT_SUCCESS:
      return {
        ...state,
        singleCredit: action.payload
      }
    default:
      return state;
  }
}