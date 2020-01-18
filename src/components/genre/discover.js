import React from 'react';
import AppDrawer from '../Drawer';

import { discoverActions } from '../../actions/genre/discover';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Discover extends React.Component {
  componentDidMount() {
    this.getMoviesGenreList();
  }

  getMoviesGenreList = () => {
    this.props.getMoviesByGenre({
      id: this.props.match.params.genreId
    });
  }
  componentDidUpdate(prevProps) {
    if(prevProps.match.params.genreId !== this.props.match.params.genreId) {
      this.getMoviesGenreList();
    }
  }

  render() {
    return (
      <AppDrawer>
        <div className="container">
          <h5>Popular movies</h5>
          <div className="row">
            {this.props.movies.map((item, index) => {
                return (
                  <div className="col col-md-3 col-6 cover_image_board" key={index}>
                    <Link to='/#'>
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

const mapStateToProps = ({ discover }) => {
  return {
    movies: discover.discover
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getMoviesByGenre: data => dispatch(discoverActions.getMoviesByGenre(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);