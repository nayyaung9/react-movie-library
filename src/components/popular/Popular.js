import React, { Component } from 'react';
import { popularActions } from '../../actions/popular';
import { connect } from 'react-redux'

class Popular extends Component {
  componentDidMount() {
    this.props.getAllPopularMovies();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
        {this.props.popular.map((item, index) => {
          return (

           
              <div className="col-md-6" key={index}>
                <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} width="50%" alt={item.title} />
                <h4>{item.title}</h4>
                <p>{item.overview}</p>
        
              </div>

          
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
)(Popular);