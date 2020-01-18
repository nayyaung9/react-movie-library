import React from 'react';
import AppDrawer from '../Drawer';
import { Input, Button } from 'antd';

import { searchActions } from '../../actions/search/search';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  state = {
    title: ''
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.searchMovieByQuery(this.state.title);
    this.setState({ title: '' })
  }

  onClickSearch = txt => {
    this.setState({ title: txt });
    this.props.searchMovieByQuery(txt);
  }
  render() {
    const { title } = this.state;
    return (
      <AppDrawer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form onSubmit={this.onFormSubmit}>
                <Input placeholder="Enter movie name" value={title} onChange={e => this.setState({ title: e.target.value })} />
              </form>
            </div>
          </div>
          <div className="searched__keywords mt-2">
            <div className="row">
              <div className="col-md-12">
                {this.props.keywords && this.props.keywords.map((item, index) => {
                  return (
                    <Button key={index} className="mr-2" onClick={() => this.onClickSearch(item)}>
                      {item}
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="row mt-4">
            {this.props.movies.map((item, index) => {
              return (
                <div className="col col-md-3 col-6 cover_image_board" key={index}>
                  <Link to='/#'>
                    <img src={`
                      ${ item.poster_path !== null
                        ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`
                        : '/images/default_movie_cover.png'
                      }
                    `} className="cover__image" alt={item.title} />
                  </Link>
                  <h6>{item.title}</h6>
                </div>
              )
            })}
          </div>
        </div>
      </AppDrawer>
    )
  }
}

const mapStateToProps = ({ search }) => {
  return {
    movies: search.movies,
    keywords: search.keywords
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchMovieByQuery: data => dispatch(searchActions.searchMoviesQueryRequest(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);