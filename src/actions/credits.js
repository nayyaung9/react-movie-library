import movie from '../api';
import { GET_MOVIE_DETAIL_CREDIT_SUCCESS } from '../constants/actionTypes';

function getMovieDetailCrews(data) {
  function success(casts, crews) {
    console.log(casts, crews)
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


export const creditActions = {
  getMovieDetailCrews
}
