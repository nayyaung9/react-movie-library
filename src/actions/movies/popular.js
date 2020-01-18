import api from '../../api';
import { 
  POPULAR_MOVIES_REQUEST, 
  POPULAR_MOVIE_DETAIL_REQUEST, 
  POPULAR_MOVIE_DETAIL_SUCCESS,
  POPULAR_MOVIES_PAGE_CHANGE
} from '../../constants/actionTypes';

function getAllPopularMovies() {
  function success(payload) {
    return { type: POPULAR_MOVIES_REQUEST, payload }
  }

  return dispatch => {
    api.get(`/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=200`)
    .then(
      payload => {
        dispatch(success(payload.data))
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
    api.get(`/movie/${data}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    .then(
      payload => {
        dispatch(success(payload.data))
        dispatch(request(false))
      }
    )
  }
}

function getPopularMoviesByPage(data) {
  function success(payload) {
    return { type: POPULAR_MOVIES_PAGE_CHANGE, payload }
  }

  return dispatch => {
    api.get(`/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${data}`)
    .then(
      payload => {
        dispatch(success(payload.data))
      },
      err => console.log(err)
    )
  }
}
export const popularActions = {
  getAllPopularMovies,
  getPopularMovieDetail,
  getPopularMoviesByPage
}