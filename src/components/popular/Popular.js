import React, { Component } from 'react';
import AppDrawer from './../Drawer';
import { popularActions } from '../../actions/movies/popular';
import { connect } from 'react-redux'
import { Skeleton, Pagination } from 'antd';
import { Link } from 'react-router-dom';

class Popular extends Component {
  state = {
    page: 1
  }
  componentDidMount() {
    this.props.getAllPopularMovies();
  }

  onPageChange = page => {
    this.setState({ page });
    this.props.getPopularMoviesByPage(page)
  }

  render() {
    return (
      <AppDrawer>
        <div className="container">
          <h5>Popular movies</h5>
          <div className="row" style={{ marginBottom: '40px' }}>
            <div className="col-md-12 text-center">
              <Pagination current={this.state.page} total={this.props.pages} onChange={this.onPageChange} />
            </div>
          </div>
          <div className="row">
            {this.props.upcomingLoading
              ? <Skeleton avatar active paragraph={{ rows: 4 }} />
              : this.props.popular && this.props.popular.map((item, index) => {
                return (
                  <div className="col col-md-3 col-6 cover_image_board" key={index}>
                    <Link to={`/popular/movie/${item.id}`}>
                      <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} className="cover__image" alt={item.title} />
                    </Link>
                    <h6>{item.title}</h6>
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

const mapStateToProps = state => {
  return {
    popular: state.popularMovies.popular.results,
    pages: state.popularMovies.popular.total_pages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPopularMovies: () => dispatch(popularActions.getAllPopularMovies()),
    getPopularMoviesByPage: data => dispatch(popularActions.getPopularMoviesByPage(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popular);