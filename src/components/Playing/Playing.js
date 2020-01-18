import React from 'react';
import AppDrawer from '../Drawer';

import { nowPlayingActions } from '../../actions/movies/nowPlaying';
import { connect } from 'react-redux';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';

class Playing extends React.Component {
  state = {
    page: 1
  }
  componentDidMount() {
    this.props.getAllNowPlayingMovies();
  }
  render() {
    return (
      <AppDrawer>
        <div className="container">
          <h5>Now Playing in Theaters</h5>
          <div className="row" style={{ marginBottom: '40px' }}>
            <div className="col-md-12 text-center">
              <Pagination current={this.state.page} total={this.props.pages} onChange={this.onPageChange} />
            </div>
          </div>
          <div className="row">
            {this.props.movies && this.props.movies.map((item, index) => {
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
          <div className="row" style={{ marginBottom: '40px' }}>
            <div className="col-md-12 text-center">
              <Pagination current={this.state.page} total={this.props.pages} onChange={this.onPageChange} />
            </div>
          </div>
        </div>
      </AppDrawer>
    )
  }
}

const mapStateToProps = ({ nowPlaying }) => {
  return {
    movies: nowPlaying.nowplaying.results,
    pages: nowPlaying.nowplaying.total_pages
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