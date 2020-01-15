import { combineReducers } from 'redux';
import popular from './reducers/popular';
import upcoming from './reducers/upcoming';
import nowPlaying from './reducers/nowPlaying';

export default combineReducers({
  popularMovies: popular,
  upcomingMovies: upcoming,
  nowPlaying
})