import { combineReducers } from 'redux';
import popular from './reducers/popular';

export default combineReducers({
  popularMovies: popular
})