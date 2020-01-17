import { combineReducers } from 'redux';
import popular from './reducers/popular';
import upcoming from './reducers/upcoming';
import nowPlaying from './reducers/nowPlaying';
import genres from './reducers/genres';
import similar from './reducers/similar';
import reviews from './reducers/review';
import TvOntheair from './reducers/onTheAir';

export default combineReducers({
  popularMovies: popular,
  upcomingMovies: upcoming,
  nowPlaying,
  genres,
  similarMovies: similar,
  reviews,
  TvOntheair
})