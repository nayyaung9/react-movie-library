import api from '../../api';
import { GET_MOVIE_DETAIL_REVIEW } from '../../constants/actionTypes'

function getMovieDetailReview(data) {
  function success(payload) {
    return { type: GET_MOVIE_DETAIL_REVIEW, payload }
  }
  return dispatch => {
    api.get(`/movie/${data}/reviews?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(
      payload => dispatch(success(payload.data.results))
    )
  }
}


export const reviewActions = {
  getMovieDetailReview
}