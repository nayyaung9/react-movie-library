import movie from '../api';
import { GET_NOW_PLAYING_MOVIES_REQUEST, GET_NOW_PLAYING_MOVIES_SUCCESS, GET_NOW_PLAYING_MOVIE_DETAIL_SUCCESS } from '../constants/actionTypes';

function getNowPlayingMovies() {
  function success(payload) {
    return { type: GET_NOW_PLAYING_MOVIES_SUCCESS, payload }
  }
  function request(loading) {
    return { type: GET_NOW_PLAYING_MOVIES_REQUEST, payload: loading }
  }

  return dispatch => {
    dispatch(request(true))
    movie.get(`/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&region=US`)
      .then(
        payload => {
          dispatch(success(payload.data.results))
          dispatch(request(false))
        },
        err => console.log(err)
      )
  }
}

function getNowPlayingMovieDetail(data) {
  function success(payload) {
    return { type: GET_NOW_PLAYING_MOVIE_DETAIL_SUCCESS, payload }
  }
  return dispatch => {
    movie.get(`/movie/${data}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(
      payload => {
        dispatch(success(payload.data))
      }
    )
  }
}

export const nowPlayingActions = {
  getNowPlayingMovies,
  getNowPlayingMovieDetail
}