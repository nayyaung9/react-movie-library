import React from 'react';
import AppDrawer from '../Drawer';
import { topRatedActions } from '../../actions/topRated';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TopRated extends React.Component {
  componentDidMount() {
    this.props.getAllTopRatedMovies();
  }
  render() {
    return (
      <AppDrawer>
        <div className="container">
          <h5>Top Rated movies</h5>
          <div className="row">
            {this.props.movies.map((item, index) => {
                return (
                  <div className="col col-md-3 col-6 cover_image_board" key={index}>
                    <Link to="/#">
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

const mapStateToProps = ({ toprated }) => {
  return {
    movies: toprated.top_rate_movies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllTopRatedMovies: () => dispatch(topRatedActions.getAllTopRatedMovies())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopRated);