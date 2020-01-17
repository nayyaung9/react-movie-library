import React from 'react';
import AppDrawer from '../Drawer';

import { nowPlayingActions } from '../../actions/nowPlaying';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Playing extends React.Component {
  componentDidMount() {
    this.props.getAllNowPlayingMovies();
  }
  render() {
    return (
      <AppDrawer>
        <div className="container">
          <h5>Now Playing in Theaters</h5>
          <div className="row">
            {this.props.movies.map((item, index) => {
                return (
                  <div className="col col-md-3 col-6 cover_image_board" key={index}>
                    <Link to={`/now/playing/movie/${item.id}`}>
                      <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} className="cover__image" alt={item.title} />
                    </Link>
                    <h5>{item.title}</h5>
                  </div>
                )
              })}
          </div>
        </div>
      </AppDrawer>
    )
  }
}

const mapStateToProps = ({ nowPlaying }) => {
  return {
    movies: nowPlaying.nowplaying
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAllNowPlayingMovies: () => dispatch(nowPlayingActions.getNowPlayingMovies())
  }

}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playing);