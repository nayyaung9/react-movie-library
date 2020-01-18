import { SEARCH_MOVIE_QUERY_REQUEST, SAVE_SEARCHED_QUERY_KEYWORDS } from '../../constants/actionTypes';

const initialState = {
  keywords: [],
  movies: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SEARCH_MOVIE_QUERY_REQUEST:
      return {
        ...state,
        movies: action.payload
      }
    case SAVE_SEARCHED_QUERY_KEYWORDS:
      return {
        ...state,
        keywords: [...state.keywords, action.keywords]  
      }
    default:
      return state;
  }
}