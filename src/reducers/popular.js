import { POPULAR_MOVIES_REQUEST } from '../constants/actionTypes';

const initialState = {
  popular: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case POPULAR_MOVIES_REQUEST:
      return {
        popular: action.payload
      }
    default:
      return state;
  }
}