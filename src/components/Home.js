import React from 'react';
import { connect } from 'react-redux';
import { popularActions } from '../actions/popular';
import { upcomingActions } from '../actions/upcoming';
import { nowPlayingActions } from '../actions/nowPlaying';
import { genresActions } from '../actions/genres';

import { Drawer, Button } from 'antd';

class Home extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  componentDidMount() {
    this.props.getAllPopularMovies();
    this.props.getAllUpcomingMovies();
    this.props.getNowPlayingMovies();
    this.props.getGenresListType();
  }
  render() {
    return (
      <div className="container">
          <Button type="primary" onClick={this.showDrawer}>
          Open
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          {this.props.genres.map((item, index) => {
            return <p key={index}>{item.name}</p>
          })}
        </Drawer>
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
        <div className="row text-center">
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
    nowPlaying: state.nowPlaying.nowplaying,
    genres: state.genres.genres
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPopularMovies: () => dispatch(popularActions.getAllPopularMovies()),
    getAllUpcomingMovies: () => dispatch(upcomingActions.getAllUpComingMovies()),
    getNowPlayingMovies: () => dispatch(nowPlayingActions.getNowPlayingMovies()),
    getGenresListType: () => dispatch(genresActions.getGenresListType())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);