import api from '../api';
import { GET_NOW_PLAYING_MOVIES_REQUEST, GET_NOW_PLAYING_MOVIES_SUCCESS } from '../constants/actionTypes';

function getNowPlayingMovies() {
  function success(payload) {
    return { type: GET_NOW_PLAYING_MOVIES_SUCCESS, payload }
  }
  function request(loading) {
    return { type: GET_NOW_PLAYING_MOVIES_REQUEST, payload: loading }
  }

  return dispatch => {
    dispatch(request(true))
    api.get(`/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&region=US`)
      .then(
        payload => {
          dispatch(success(payload.data.results))
          dispatch(request(false))
        },
        err => console.log(err)
      )
  }
}

export const nowPlayingActions = {
  getNowPlayingMovies
}