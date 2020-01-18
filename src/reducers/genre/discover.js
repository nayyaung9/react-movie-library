import { GET_GENRES_DISCOVER_SUCCESS } from '../../constants/actionTypes';

const initialState = {
  discover: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_GENRES_DISCOVER_SUCCESS:
      return {
        discover: action.payload
      }
    default:
      return state;
  }
}