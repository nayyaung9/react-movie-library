import movie from '../api';
import { GET_TOP_RATED_MOVIE_SUCCESS } from '../constants/actionTypes';

function getAllTopRatedMovies() {
  function success(payload) {
    return { type: GET_TOP_RATED_MOVIE_SUCCESS, payload }
  }
  return dispatch => {
    movie.get(`/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(
      payload => dispatch(success(payload.data.results))
    )
  }
}
export const topRatedActions = {
  getAllTopRatedMovies
}