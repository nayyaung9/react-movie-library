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
          <div className="row">
          
        
          
            {this.props.upcomingLoading
              ? <Skeleton avatar active paragraph={{ rows: 4 }} />
              : this.props.upcoming.map((item, index) => {
                return (
                  <div  className="col-md-3 col-6 cover_image_board" key={index}>
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} className="cover__image" alt={item.title} />
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