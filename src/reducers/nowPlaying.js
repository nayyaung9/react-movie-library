import { GET_NOW_PLAYING_MOVIES_REQUEST, GET_NOW_PLAYING_MOVIES_SUCCESS } from '../constants/actionTypes';

const initialState = {
  nowplaying: [],
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NOW_PLAYING_MOVIES_REQUEST:
      return {
        ...state,
        loading: action.payload
      }
    case GET_NOW_PLAYING_MOVIES_SUCCESS:
      return {
        ...state,
        nowplaying: action.payload
      }
    default:
      return state;
  }
}