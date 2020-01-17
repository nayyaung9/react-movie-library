import api from '../../api';
import { GET_SIMILAR_MOVIE_REQUEST } from '../../constants/actionTypes';

function getAllSimilarMovies(data) {
  function success(payload) {
    return { type: GET_SIMILAR_MOVIE_REQUEST, payload }
  }
  return dispatch => {
    api.get(`movie/${data}/similar?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(
      payload => {
        dispatch(success(payload.data.results))
      }
    )
  }
}

export const similarActions = {
  getAllSimilarMovies
}