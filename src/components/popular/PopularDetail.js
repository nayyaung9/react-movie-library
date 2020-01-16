import React, { Component } from 'react';
import AppDrawer from './../Drawer';

import { popularActions } from '../../actions/popular';
import { connect } from 'react-redux';

import { Avatar, Icon } from 'antd';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

const timeConvert = n => {
  var num = n;
  var hours = (num / 60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return `${rhours}h ${rminutes}mm`;
}

class PopularDetail extends Component {
  componentDidMount() {
    this.props.getPopularMovieDetail({
      id: this.props.match.params.id
    })
  }

  render() {
    const { movie } = this.props;
    return (
      <AppDrawer>
        <div className="container">
          <div className="board" style={{
            // backgroundImage: `url(https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.backdrop_path})`,
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',

          }}>

            <div className="board_data" style={{ paddingTop: '60px' }}>
              <div className="row">
                <div className="col-md-4 text-right">
                  <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} className="cover__image" />
                </div>
                <div className="col-md-8 text-left">
                  <h3>{movie.title}</h3>
                  <div className="overview mt-4">
                    <h4>Overview</h4>
                    <p>{movie.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="companies">
            <h4>Production companies</h4>

            {movie.production_companies.map((item, index) => {
              return <span key={index}><Avatar src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.logo_path}`}></Avatar>{item.name}</span>
            })}

          </div>
            Budget: {formatter.format(movie.budget)} <br />

            runtime: {timeConvert(movie.runtime)}
          <div className="genres">
            <h4>Genres</h4>
            {movie.genres.map((item, index) => {
              return (
                <span>{item.name} &nbsp; </span>
              )
            })}
          </div>

        </div>
      </AppDrawer>
    )
  }
}

const mapStateToProps = ({ popularMovies }) => {
  return {
    movie: popularMovies.singlePopular
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getPopularMovieDetail: data => dispatch(popularActions.getPopularMovieDetail(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularDetail);