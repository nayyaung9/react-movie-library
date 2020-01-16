import { UPCOMING_MOVIES_REQUEST, UPCOMING_MOVIES_SUCCESS } from '../constants/actionTypes';

const initialState = {
  upcoming: [],
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
    default:
      return state;
  }
}