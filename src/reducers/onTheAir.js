import { GET_TV_ON_THE_AIR_REQUEST } from '../constants/actionTypes';

const initialState = {
  ontheairTv: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_TV_ON_THE_AIR_REQUEST:
      console.log(action)
      return {
        ontheairTv: action.payload
      }
    default:
      return state;
  }
}