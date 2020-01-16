import api from '../api';
import { UPCOMING_MOVIES_REQUEST, UPCOMING_MOVIES_SUCCESS } from '../constants/actionTypes';
const API_KEY = '678a144bfd69768570aeb787fe269207';

function getAllUpComingMovies() {
  function success(payload) {
    return { type: UPCOMING_MOVIES_SUCCESS, payload }
  }
  function request(loading) {
    return { type: UPCOMING_MOVIES_REQUEST, payload: loading }
  }

  return dispatch => {
    dispatch(request(true))
    api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
      .then(
        payload => {
          dispatch(success(payload.data.results))
          dispatch(request(false))
        },
        err => console.log(err)
      )
  }
}

export const upcomingActions = {
  getAllUpComingMovies
}
