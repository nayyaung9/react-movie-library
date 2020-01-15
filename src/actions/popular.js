import api from '../api';
import { POPULAR_MOVIES_REQUEST } from '../constants/actionTypes';
const API_KEY = '678a144bfd69768570aeb787fe269207';

function getAllPopularMovies() {
  function success(payload) {
    return { type: POPULAR_MOVIES_REQUEST, payload }
  }

  return dispatch => {
    api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(
        payload => {
          dispatch(success(payload.data.results))
        },
        err => console.log(err)
      )
  }
}

export const popularActions = {
  getAllPopularMovies
}