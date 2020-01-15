import React, { Component } from 'react';
import { popularActions } from '../../actions/popular';
import { connect } from 'react-redux'

class Popular extends Component {
  componentDidMount() {
    this.props.getAllPopularMovies();
  }
  render() {
    return (
      <div>Popular</div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPopularMovies: () => dispatch(popularActions.getAllPopularMovies())
  }
}
export default connect(
  null, 
  mapDispatchToProps
)(Popular);