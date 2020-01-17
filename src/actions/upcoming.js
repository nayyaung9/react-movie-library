import movie from '../api';
import { UPCOMING_MOVIES_REQUEST, UPCOMING_MOVIES_SUCCESS, UPCOMING_MOVIE_DETAIL_REQUEST } from '../constants/actionTypes';

function getAllUpComingMovies() {
  function success(payload) {
    return { type: UPCOMING_MOVIES_SUCCESS, payload }
  }
  function request(loading) {
    return { type: UPCOMING_MOVIES_REQUEST, payload: loading }
  }

  return dispatch => {
    dispatch(request(true))
    movie.get(`/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then(
      payload => {
        dispatch(success(payload.data.results))
        dispatch(request(false))
      },
      err => console.log(err)
    )
  }
}

function getUpcomingMovieDetail(data) {
  function request(payload) {
    console.log(payload)
    return { type: UPCOMING_MOVIE_DETAIL_REQUEST, payload }
  }

  return dispatch => {
    movie.get(`/movie/${data}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(
      payload => {
        dispatch(request(payload.data))
      }
    )
  }
}

export const upcomingActions = {
  getAllUpComingMovies,
  getUpcomingMovieDetail
}
