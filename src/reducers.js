import { combineReducers } from 'redux';
import popular from './reducers/popular';
import upcoming from './reducers/upcoming';
import nowPlaying from './reducers/nowPlaying';
import genres from './reducers/genres';

export default combineReducers({
  popularMovies: popular,
  upcomingMovies: upcoming,
  nowPlaying,
  genres
})