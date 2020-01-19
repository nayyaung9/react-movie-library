import { GET_GENRES_DISCOVER_SUCCESS, GET_GENRES_DISCOVER_PAGE_SUCCESS } from '../../constants/actionTypes';

const initialState = {
  discover: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_GENRES_DISCOVER_SUCCESS:
      return {
        discover: action.payload
      }
    case GET_GENRES_DISCOVER_PAGE_SUCCESS:
      return {
        discover: action.payload
      }
    default:
      return state;
  }
}