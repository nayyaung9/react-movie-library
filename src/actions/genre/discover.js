import movie from '../../api';
import { GET_GENRES_DISCOVER_SUCCESS } from '../../constants/actionTypes';

function getMoviesByGenre(data) {
  function success(payload) {
    return { type: GET_GENRES_DISCOVER_SUCCESS, payload }
  }
  return dispatch => {
    movie.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${data.id}`)
    .then(
      payload => dispatch(success(payload.data.results))
    )
  }
}



export const discoverActions = {
  getMoviesByGenre
}