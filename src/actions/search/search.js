import movie from '../../api';
import { SEARCH_MOVIE_QUERY_REQUEST, SAVE_SEARCHED_QUERY_KEYWORDS } from '../../constants/actionTypes';

function searchMoviesQueryRequest(data) {
  function request(payload) {
    return { type: SEARCH_MOVIE_QUERY_REQUEST, payload }
  }
  function keywords(keywords) {
    return { type: SAVE_SEARCHED_QUERY_KEYWORDS, keywords }
  }
  return dispatch => {
    dispatch(keywords(data))
    movie.get(`/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${data}&page=1&include_adult=false`)
    .then(
      payload => {
        dispatch(request(payload.data.results))
      }
    )
  }
}

export const searchActions = {
  searchMoviesQueryRequest
}
