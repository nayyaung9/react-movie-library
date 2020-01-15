import React, { Component } from 'react';
import { popularActions } from '../../actions/popular';
import { connect } from 'react-redux'

class Popular extends Component {
  componentDidMount() {
    this.props.getAllPopularMovies();
  }
  render() {
    return (
      <div>
        {this.props.popular.map((item, index) => {
          return (
            <div key={index}>
              <h4>{item.title}</h4>
              <p>{item.overview}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    popular: state.popularMovies.popular
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPopularMovies: () => dispatch(popularActions.getAllPopularMovies())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Popular);