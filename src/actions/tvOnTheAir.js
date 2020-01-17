import movie from './../api';
import { GET_TV_ON_THE_AIR_REQUEST } from '../constants/actionTypes';

function getAllTvOnTheAir() {
  function request(payload) {
    console.log('action', payload)
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

export const tvOntheAirActions = {
  getAllTvOnTheAir
}