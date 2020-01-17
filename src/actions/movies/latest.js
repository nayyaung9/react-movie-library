import movie from '../../api';
import { GET_MOVIE_LATEST_REQUEST } from '../../constants/actionTypes';

function getMovieLatest() {
  function request(payload) {
    console.log(payload)
    return { type: GET_MOVIE_LATEST_REQUEST, payload }
  }
  return dispatch => {
    movie.get(`/movie/latest?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(
      payload => dispatch(request(payload.data))
    )
  }
}
export const latestActions = {
  getMovieLatest
}