import movie from '../../api';
import { GET_MOVIE_DETAIL_VIDEO_SUCCESS, GET_MOVIE_DETAIL_VIDEO_REQUEST } from '../../constants/actionTypes';

function getMovieDetailVideos(data) {
  function success(payload) {
    return { type: GET_MOVIE_DETAIL_VIDEO_SUCCESS, payload }
  }
  function request(loading) {
    return { type: GET_MOVIE_DETAIL_VIDEO_REQUEST, payload: loading }
  }
  return dispatch => {
    dispatch(request(true))
    movie.get(`/movie/${data}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(
      payload => {
        dispatch(success(payload.data.results))
        dispatch(request(false))
      }
    )
  }
}

export const videoActions = {
  getMovieDetailVideos
}