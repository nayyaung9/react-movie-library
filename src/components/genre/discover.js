import React from 'react';
import AppDrawer from '../Drawer';

import { discoverActions } from '../../actions/genre/discover';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Pagination } from 'antd';

class Discover extends React.Component {
  state = {
    genreName: '',
    page: 1
  }

  componentDidMount() {
    this.getMoviesGenreList();
  }

  getMoviesGenreList = () => {
    const { match: { params : { genreId } } } = this.props;
    this.props.getMoviesByGenre({
      id: genreId
    });
  }
  componentDidUpdate(prevProps) {
    if(prevProps.match.params.genreId !== this.props.match.params.genreId) {
      this.getMoviesGenreList();
      this.setState({ page: 1 })
    }
  }

  componentWillReceiveProps(prevProps) {
    const { match: { params : { genreName } } } = prevProps; 
    this.setState({
      genreName
    })
  }

  onPageChange = page => {
    this.setState({ page })
    const { match: { params : { genreId } } } = this.props;
    this.props.getMoviesByGenrePage({
      id: genreId,
      page
    })
  }

  render() {
    const { genreName } = this.state;
    return (
      <AppDrawer>
        <div className="container">
          <h5>{genreName} movies</h5>
          <div className="row" style={{ marginBottom: '40px' }}>
            <div className="col-md-12 text-center">
              <Pagination current={this.state.page} total={this.props.pages} onChange={this.onPageChange} />
            </div>
          </div>
          <div className="row">
            {this.props.movies && this.props.movies.map((item, index) => {
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

const mapStateToProps = ({ discover }) => {
  return {
    movies: discover.discover.results,
    pages: discover.discover.total_pages
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getMoviesByGenre: data => dispatch(discoverActions.getMoviesByGenre(data)),
    getMoviesByGenrePage: data => dispatch(discoverActions.getMoviesByGenrePage(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);