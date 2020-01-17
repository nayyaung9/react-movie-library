import { GET_NOW_PLAYING_MOVIES_REQUEST, GET_NOW_PLAYING_MOVIES_SUCCESS, GET_NOW_PLAYING_MOVIE_DETAIL_SUCCESS } from '../constants/actionTypes';

const initialState = {
  nowplaying: [],
  loading: false,
  singlePlaying: {}
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
    case GET_NOW_PLAYING_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        singlePlaying: action.payload
      }
    default:
      return state;
  }
}