import React, { Component } from 'react';
import AppDrawer from './../Drawer';
import { upcomingActions } from '../../actions/upcoming';
import { connect } from 'react-redux'

import { Skeleton } from 'antd';
class UpComing extends Component {
  componentDidMount() {
    this.props.getAllUpcomingMovies();
  }
  render() {
    return (
      <AppDrawer>
        <div className="container">
          <h3>Upcoming movies</h3>
          <div className="scrollmenu">
            {this.props.upcomingLoading
              ? <Skeleton avatar active paragraph={{ rows: 4 }} />
              : this.props.upcoming.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} alt={item.title} />
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

const mapStateToProps = state => {
  return {
    upcoming: state.upcomingMovies.upcoming
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllUpcomingMovies: () => dispatch(upcomingActions.getAllUpComingMovies())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpComing);