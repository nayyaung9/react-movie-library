import React, { Component } from 'react';
import AppDrawer from './../Drawer';

import { popularActions } from '../../actions/popular';
import { similarActions } from '../../actions/similar';
import { reviewActions } from '../../actions/review';
import { creditActions } from '../../actions/credits';
import { connect } from 'react-redux';

import { Avatar, Divider, Comment, Skeleton, Tag, Icon } from 'antd';

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
    const { match: { params: { id } }} = this.props;
    this.props.getPopularMovieDetail(id);
    this.props.getAllSimilarMovies(id);
    this.props.getMovieDetailReviews(id);
    this.props.getMovieDetailCrews(id);
  }

  render() {
    const { movie } = this.props;
    return (
      <AppDrawer>
        <div className="board"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w533_and_h300_bestv2/${movie.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            padding: '20px'
          }}
        >
          <div className="container mt-4">
            <div className="board_data" style={{ paddingTop: '15px' }}>
              <div className="row">
                <div className="col-md-4 text-right">
                  <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt={movie.title} className="cover__image" />
                </div>
                <div className="col-md-8 text-left">
                  <h3 className="text-white">{movie.title}</h3>
                  <div className="overview mt-4">
                    <h4 className="text-white">Overview</h4>
                    <p className="text-white">{movie.overview}</p>
                    <Tag color="gold"> <Icon type="dollar" /> {formatter.format(movie.budget)} </Tag>
                    <br />
                    <Icon type="clock-circle" /> {timeConvert(movie.runtime)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar movies */}
        <div className="container">
          {this.props.loading
            ? <Skeleton avatar active paragraph={{ rows: 5 }} />
            : (
              <div className="similar__movies">
                <h3>Similar movies</h3>
                <div className="scrollmenu">
                  {this.props.similarMovies.length
                    ? this.props.similarMovies.map((item, index) => {
                      return (
                        <div key={index}>
                          <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} alt={item.title} />
                          <span>{item.title}</span>
                        </div>
                      )
                    })
                    : <span>No similar movies</span>
                  }
                </div>
              </div>
            )
          }

          <Divider />

          {/* Top Billed Cast */}
          <div className="row">
            <div className="col-md-8">
              <h3>Top Billed Cast</h3>
              <div className="scrollmenu">
                {this.props.casts.length
                  ? this.props.casts.map((item, index) => {
                    return (
                      <div key={index}>
                        <img src={`
                          ${
                            item.profile_path !== null
                            ? `https://image.tmdb.org/t/p/w138_and_h175_face/${item.profile_path}`
                            : `/images/default_user.png`
                          }
                        `} alt={item.title} />
                        <span>{item.name}</span>
                      </div>
                    )
                  })
                  : <span>No similar movies</span>
                }
              </div>
            </div>

            <div className="col-md-4">
              <div className="genres">
                <h4>Genres</h4>
                {movie.genres && movie.genres.map((item, index) => {
                  return <Tag key={index}>{item.name}</Tag>
                })}
              </div>
            </div>
          </div>

          <Divider />

          {/* Reviews */}
          {this.props.loading
            ? <Skeleton avatar active paragraph={{ rows: 5 }} />
            : (
              <div className="comments">
                <h3>Reviews</h3>
                {this.props.reviews.length
                  ? this.props.reviews.map((item, index) => {
                    return (
                      <Comment
                        key={index}
                        author={item.author}
                        avatar={
                          <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                          />
                        }
                        content={
                          <p> {item.content.split('\n', 3)[0]}</p>
                        }
                      />
                    )
                  })
                  : <span>No reviews</span>
                }
              </div>
            )
          }
        </div>
      </AppDrawer>
    )
  }
}

const mapStateToProps = state => {
  const { popularMovies, similarMovies, reviews, credits } = state;
  return {
    movie: popularMovies.singlePopular,
    similarMovies: similarMovies.similar,
    reviews: reviews.reviews,
    loading: popularMovies.loading,
    casts: credits.casts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getPopularMovieDetail: data => dispatch(popularActions.getPopularMovieDetail(data)),
    getAllSimilarMovies: data => dispatch(similarActions.getAllSimilarMovies(data)),
    getMovieDetailReviews: data => dispatch(reviewActions.getMovieDetailReview(data)),
    getMovieDetailCrews: data => dispatch(creditActions.getMovieDetailCrews(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularDetail);