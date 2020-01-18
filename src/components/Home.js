import React from 'react';
import AppDrawer from './Drawer';
import { connect } from 'react-redux';
import { popularActions } from '../actions/movies/popular';
import { upcomingActions } from '../actions/movies/upcoming';
import { nowPlayingActions } from '../actions/movies/nowPlaying';
import { genresActions } from '../actions/movies/genres';
import { topRatedActions } from '../actions/movies/topRated';

import { Skeleton } from 'antd';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  componentDidMount() {
    this.props.getAllPopularMovies();
    this.props.getAllUpcomingMovies();
    this.props.getNowPlayingMovies();
    this.props.getGenresListType();
    this.props.getAllTopRatedMovies();
  }
  render() {
    return (
      <AppDrawer>
        <div className="container" style={{ margin: '20px auto' }}>
          <div className="row">
            <div className="col-6">
              <h3>Movies</h3>
            </div>
          </div>

          <div className="row" style={{ fontWeight: 'bold' }}>
            <div className="col-6">
              <h5>In Theaters (US)</h5>
            </div>
            <div className="col-6 text-right">
              <Link to='/now/playing/movies' className="anchor">See all</Link>
            </div>
          </div>

          <div className="scrollmenu">
            {this.props.nowPlayingLoading
              ? <Skeleton avatar active />
              : this.props.nowPlaying && this.props.nowPlaying.map((item, index) => {
                return (
                  <span key={index}>
                    <Link to={`/now/playing/movie/${item.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} alt={item.title} />
                    </Link>
                    <h6 className="text-center"> {item.title} </h6>
                  </span>
                )
              })}
          </div>
          <div className="row" style={{ fontWeight: 'bold' }}>
            <div className="col-6">
              <h5>Upcoming</h5>
            </div>
            <div className="col-6 text-right">
              <Link to='/upcoming/movies' className="anchor">See all</Link>
            </div>
          </div>

          <div className="scrollmenu">
            {this.props.upcomingLoading
              ? <Skeleton avatar active paragraph={{ rows: 4 }} />
              : this.props.upcoming && this.props.upcoming.map((item, index) => {
                return (
                  <div key={index}>
                    <Link to={`/upcoming/movie/${item.id}`}>
                      <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} alt={item.title} />
                    </Link>
                    <span>{item.title}</span>
                  </div>
                )
              })}
          </div>

          <div className="row" style={{ fontWeight: 'bold' }}>
            <div className="col-6">
              <h5>Popular</h5>
            </div>
            <div className="col-6 text-right">
              <Link to='/popular/movies' className="anchor">See all</Link>
            </div>
          </div>

          <div className="scrollmenu">
            {this.props.upcomingLoading
              ? <Skeleton avatar active paragraph={{ rows: 4 }} />
              : this.props.popular && this.props.popular.map((item, index) => {
                return (
                  <div key={index}>
                    <Link to={`/popular/movie/${item.id}`}>
                      <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} alt={item.title} />
                    </Link>
                    <span>{item.title}</span>
                  </div>
                )
              })}
          </div>

          <div className="row" style={{ fontWeight: 'bold' }}>
            <div className="col-6">
              <h5>Top rated movies</h5>
            </div>
            <div className="col-6 text-right">
              <Link to='/top_rated/movies' className="anchor">See all</Link>
            </div>
          </div>

          <div className="scrollmenu">
            {this.props.topratedMovies.map((item, index) => {
                return (
                  <div key={index}>
                    <Link to="/#">
                      <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} alt={item.title} />
                    </Link>
                    <span>{item.title}</span>
                  </div>
                )
              })}
          </div>

        </div>
      </AppDrawer>
    )
  }
}

const mapStateToProps = ({ popularMovies, upcomingMovies, nowPlaying, toprated, genres }) => {
  return {
    popular: popularMovies.popular.results,

    upcoming: upcomingMovies.upcoming.results,
    upcomingLoading: upcomingMovies.loading,

    nowPlaying: nowPlaying.nowplaying.results,
    nowPlayingLoading: nowPlaying.loading,

    topratedMovies: toprated.top_rate_movies,

    genres: genres.genres
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPopularMovies: () => dispatch(popularActions.getAllPopularMovies()),
    getAllUpcomingMovies: () => dispatch(upcomingActions.getAllUpComingMovies()),
    getNowPlayingMovies: () => dispatch(nowPlayingActions.getNowPlayingMovies()),
    getGenresListType: () => dispatch(genresActions.getGenresListType()),
    getAllTopRatedMovies: () => dispatch(topRatedActions.getAllTopRatedMovies())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);