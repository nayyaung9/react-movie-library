import movie from '../../api';
import { GET_SIMILAR_MOVIE_REQUEST, GET_SIMILAR_MOVIE_DETAIL_SUCCESS } from '../../constants/actionTypes';

function getAllSimilarMovies(data) {
  function success(payload) {
    return { type: GET_SIMILAR_MOVIE_REQUEST, payload }
  }
  return dispatch => {
    movie.get(`movie/${data}/similar?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(
      payload => {
        dispatch(success(payload.data.results))
      }
    )
  }
}

function getSimilarMovieDetail(data) {
  function success(payload) {
    return { type: GET_SIMILAR_MOVIE_DETAIL_SUCCESS, payload }
  }
  return dispatch => {
    movie.get(`/movie/${data}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    .then(
      payload => dispatch(success(payload.data))
    )
  }
}

export const similarActions = {
  getAllSimilarMovies,
  getSimilarMovieDetail
}