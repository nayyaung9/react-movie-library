import React, { Component } from 'react';
import AppDrawer from './../Drawer';

import { nowPlayingActions } from '../../actions/movies/nowPlaying';
import { similarActions } from '../../actions/movies/similar';
import { reviewActions } from '../../actions/movies/review';
import { creditActions } from '../../actions/movies/credits';
import { videoActions } from '../../actions/movies/videos';
import { connect } from 'react-redux';

import { Avatar, Divider, Comment, Skeleton, Tag, Rate } from 'antd';
import moment from 'moment';

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

class SinglePlaying extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.props.getNowPlayingMovieDetail(id);
    this.props.getAllSimilarMovies(id);
    this.props.getMovieDetailReviews(id);
    this.props.getMovieDetailCrews(id);
    this.props.getMovieDetailVideos(id)
  }

  render() {
    const { movie, videos } = this.props;
    return (
      <AppDrawer>
        <div className="board"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w533_and_h300_bestv2/${movie.backdrop_path})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="board_border">
            <div className="container">
              <div className="board_data">
                <div className="row">
                  <div className="col-md-4 text-center">
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title} className="detail_image" />
                  </div>
                  <div className="col-md-8 movie_data">
                    <h4 className="movie_title">{movie.title}</h4>

                    <div className="overview mt-4">
                      <h5 className="text-white">Overview</h5>
                      <p className="text-white">{movie.overview} </p>
                      <Rate disabled defaultValue={movie.vote_average / 2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container">
          {/* Top Billed Cast */}
          <div className="row mt-5">
            <div className="col-md-8">
              <h3>Top Billed Cast</h3>
              <div className="scrollmenu text-center">
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
                        <h6>{item.name}</h6>
                        <span className="lighter">{item.character}</span>
                      </div>
                    )
                  })
                  : <span>No similar movies</span>
                }
              </div>
            </div>

            <div className="col-md-4" style={{ paddingTop: '10px' }}>
              <div className="status mb-2">
                <h6>Status</h6>
                <span className="text-secondary">{movie.status}</span>
              </div>
              <div className="duration mb-2">
                <span>Duration: <span className="text-secondary">{timeConvert(movie.runtime)}</span></span>
              </div>
              <div className="released_date mb-2">
                <span>Released date:
                  <span className="text-secondary">
                    {moment(movie.release_date).format("DD MMM YY")}
                  </span>
                </span>
              </div>
              <div className="budget mt-2">
                <span>Budget: <span className="text-secondary">{formatter.format(movie.budget)}</span></span>
              </div>
              <div className="languages mt-2">
                <h6>Languages</h6>
                {movie.spoken_languages && movie.spoken_languages.map((text, index) => {
                  return <Tag key={index}>{text.name}</Tag>
                })}
              </div>
              <div className="genres mt-2">
                <h6>Genres</h6>
                {movie.genres && movie.genres.map((item, index) => {
                  return <Tag color="orange" key={index}>{item.name}</Tag>
                })}
              </div>
            </div>
          </div>
          <Divider />

          {/* Similar movies */}
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

          {/* videos */}
          <h3>Trailers</h3>
          {this.props.videosLoading
            ? <Skeleton active avatar paragraph={{ rows: 4 }} />
            : (
              <div className="scrollmenu">
                {videos && videos.map((item, index) => {
                  return (
                    <iframe width="560" height="315" key={index}
                      src={`https://www.youtube.com/embed/${item.key}`}
                      title={item.key}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
                    </iframe>
                  )
                })}
              </div>
            )
          }


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
                            alt={item.author}
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
  const { nowPlaying, similarMovies, reviews, credits, videos } = state;
  return {
    movie: nowPlaying.singlePlaying,
    similarMovies: similarMovies.similar,
    reviews: reviews.reviews,
    casts: credits.casts,
    videos: videos.videos,
    videosLoading: videos.loading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getNowPlayingMovieDetail: data => dispatch(nowPlayingActions.getNowPlayingMovieDetail(data)),
    getAllSimilarMovies: data => dispatch(similarActions.getAllSimilarMovies(data)),
    getMovieDetailReviews: data => dispatch(reviewActions.getMovieDetailReview(data)),
    getMovieDetailCrews: data => dispatch(creditActions.getMovieDetailCrews(data)),
    getMovieDetailVideos: data => dispatch(videoActions.getMovieDetailVideos(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePlaying);