import { GET_MOVIE_DETAIL_VIDEO_REQUEST, GET_MOVIE_DETAIL_VIDEO_SUCCESS } from '../constants/actionTypes';

const initialState = {
  loading: false,
  videos: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_MOVIE_DETAIL_VIDEO_SUCCESS:
      return {
        ...state,
        videos: action.payload
      }
    case GET_MOVIE_DETAIL_VIDEO_REQUEST:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
}