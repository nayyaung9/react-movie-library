import api from '../api';
import { POPULAR_MOVIES_REQUEST, POPULAR_MOVIE_DETAIL_REQUEST, POPULAR_MOVIE_DETAIL_SUCCESS } from '../constants/actionTypes';

function getAllPopularMovies() {
  function success(payload) {
    return { type: POPULAR_MOVIES_REQUEST, payload }
  }

  return dispatch => {
    api.get(`/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then(
      payload => {
        dispatch(success(payload.data.results))
      },
      err => console.log(err)
    )
  }
}

function getPopularMovieDetail(data) {
  function request(loading) {
    return { type: POPULAR_MOVIE_DETAIL_REQUEST, payload: loading }
  }
  function success(payload) {
    return { type: POPULAR_MOVIE_DETAIL_SUCCESS, payload }
  }
  return dispatch => {
    dispatch(request(true))
    api.get(`/movie/${data.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    .then(
      payload => {
        dispatch(success(payload.data))
        dispatch(request(false))
      }
    )
  }
}
export const popularActions = {
  getAllPopularMovies,
  getPopularMovieDetail
}