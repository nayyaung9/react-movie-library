import React from 'react';
import { connect } from 'react-redux';
import { popularActions } from '../actions/popular';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h5>Popular movies</h5>
        <div className="scrollmenu">
          { this.props.popular.map((item, index) => {
            return (
              <span key={index}>
                <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} alt={item.title} />
                <span>{item.title}</span>
              </span>
            )
          })}
      </div>
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
)(Home);