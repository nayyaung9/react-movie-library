import React from 'react';
import { connect } from 'react-redux';
import { popularActions } from '../actions/popular';
import { upcomingActions } from '../actions/upcoming';
import { nowPlayingActions } from '../actions/nowPlaying';


class Home extends React.Component {
  componentDidMount() {
    this.props.getAllPopularMovies();
    this.props.getAllUpcomingMovies();
    this.props.getNowPlayingMovies();
  }
  render() {
    return (
      <div className="container">
        <h5>In Theaters</h5>
        <div className="scrollmenu">
          { this.props.nowPlaying.map((item, index) => {
            return (
              <span key={index}>
                <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} alt={item.title} />
                <span>{item.title}</span>
              </span>
            )
          })}
        </div>
        <h5>Upcoming movies</h5>
        <div className="row">
          {this.props.popular.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} alt={item.title} />
                <h4>{item.title}</h4>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    popular: state.popularMovies.popular,
    upcoming: state.upcomingMovies.upcoming,
    nowPlaying: state.nowPlaying.nowplaying
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPopularMovies: () => dispatch(popularActions.getAllPopularMovies()),
    getAllUpcomingMovies: () => dispatch(upcomingActions.getAllUpComingMovies()),
    getNowPlayingMovies: () => dispatch(nowPlayingActions.getNowPlayingMovies())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);