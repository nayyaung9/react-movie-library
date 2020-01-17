import { GET_TV_ON_THE_AIR_REQUEST, GET_TV_ON_THE_AIR_DETAIL_SUCCESS } from '../../constants/actionTypes';

const initialState = {
  ontheairTv: [],
  singleOnTheAir: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_TV_ON_THE_AIR_REQUEST:
      return {
        ...state,
        ontheairTv: action.payload
      }
    case GET_TV_ON_THE_AIR_DETAIL_SUCCESS:
      return {
        ...state,
        singleOnTheAir: action.payload
      }
    default:
      return state;
  }
}