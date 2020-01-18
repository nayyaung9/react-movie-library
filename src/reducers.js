import { combineReducers } from 'redux';
import popular from './reducers/movies/popular';
import upcoming from './reducers/movies/upcoming';
import nowPlaying from './reducers/movies/nowPlaying';
import genres from './reducers/movies/genres';
import similar from './reducers/movies/similar';
import latest from './reducers/movies/latest';
import toprated from './reducers/movies/topRated';
import credits from './reducers/movies/credits';
import reviews from './reducers/movies/review';
import discover from './reducers/genre/discover';
import TvOntheair from './reducers/tv/onTheAir';
import videos from './reducers/movies/videos';

export default combineReducers({
  popularMovies: popular,
  upcomingMovies: upcoming,
  nowPlaying,
  genres,
  similarMovies: similar,
  latest,
  toprated,
  credits,
  reviews,
  discover,
  videos,
  TvOntheair
})