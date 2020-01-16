import api from '../api';
import { GET_GENRE_TYPE_LIST_REQUEST } from '../constants/actionTypes';

function getGenresListType() {
  function success(payload) {
    return { type: GET_GENRE_TYPE_LIST_REQUEST, payload }
  }

  return dispatch => {
    api.get(`/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&region=US`)
      .then(
        payload => {
          dispatch(success(payload.data.genres))
        },
        err => console.log(err)
      )
  }
}

export const genresActions = {
  getGenresListType
}