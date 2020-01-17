import movie from '../../api';
import { GET_TV_ON_THE_AIR_REQUEST, GET_TV_ON_THE_AIR_DETAIL_SUCCESS } from '../../constants/actionTypes';

function getAllTvOnTheAir() {
  function request(payload) {
    return { type: GET_TV_ON_THE_AIR_REQUEST, payload }
  }
  return dispatch => {
    movie.get(`/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(
      payload => {
        dispatch(request(payload.data.results))
      }
    )
  }
}

function getTvOnTheAirDetail(data) {
  function success(payload) {
    return { type: GET_TV_ON_THE_AIR_DETAIL_SUCCESS, payload }
  }
  return dispatch => {
    movie.get(`/tv/${data.id}?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(
      payload => dispatch(success(payload.data))
    )
  }
}

export const tvOntheAirActions = {
  getAllTvOnTheAir,
  getTvOnTheAirDetail
}