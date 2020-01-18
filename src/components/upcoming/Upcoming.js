import React, { Component } from 'react';
import AppDrawer from './../Drawer';
import { upcomingActions } from '../../actions/movies/upcoming';
import { connect } from 'react-redux'

import { Skeleton, Pagination } from 'antd';
import { Link } from 'react-router-dom';

class UpComing extends Component {
  state = {
    page: 1
  }

  componentDidMount() {
    this.props.getAllUpcomingMovies();
  }

  onPageChange = page => {
    this.setState({ page });
    this.props.getUpcomingMoviesByPage(page)
  }

  render() {
    return (
      <AppDrawer>
        <div className="container">
          <h3>Upcoming movies</h3>
          <div className="row" style={{ marginBottom: '40px' }}>
            <div className="col-md-12 text-center">
              <Pagination current={this.state.page} total={this.props.pages} onChange={this.onPageChange} />
            </div>
          </div>
          <div className="row">
          
            {this.props.upcomingLoading
              ? <Skeleton avatar active paragraph={{ rows: 4 }} />
              : this.props.upcoming.map((item, index) => {
                return (
                  <div  className="col-md-3 col-6 cover_image_board" key={index}>
                    <Link to={`/upcoming/movie/${item.id}`}>
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

const mapStateToProps = state => {
  return {
    upcoming: state.upcomingMovies.upcoming.results,
    pages: state.upcomingMovies.upcoming.total_pages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllUpcomingMovies: () => dispatch(upcomingActions.getAllUpComingMovies()),
    getUpcomingMoviesByPage: data => dispatch(upcomingActions.getUpcomingMoviesByPage(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpComing);