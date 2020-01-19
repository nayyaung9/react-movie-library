import movie from '../../api';
import { GET_MOVIE_DETAIL_CREDIT_SUCCESS, GET_SINGLE_CREDIT_SUCCESS } from '../../constants/actionTypes';

function getMovieDetailCrews(data) {
  function success(casts, crews) {
    return { type: GET_MOVIE_DETAIL_CREDIT_SUCCESS, casts, crews }
  }
  return dispatch => {
    movie.get(`/movie/${data}/credits?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(
      payload => {
        dispatch(success(payload.data.cast, payload.data.crew))
      }
    )
  }
}

function getSingleCredit(data) {
  function success(payload) {
    return { type: GET_SINGLE_CREDIT_SUCCESS, payload }
  }
  return dispatch => {
    movie.get(`/credit/${data.id}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(
      payload => dispatch(success(payload.data))
    )
  }
}

export const creditActions = {
  getMovieDetailCrews,
  getSingleCredit
}
