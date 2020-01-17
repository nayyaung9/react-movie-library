import React from 'react';
import AppDrawer from '../Drawer';
import { tvOntheAirActions } from '../../actions/tvOnTheAir';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class OnTheAir extends React.Component {
  componentDidMount() {
    this.props.getAllTvOnTheAir();
  }
  render() {
    return (
      <AppDrawer>
        <div className="container">
          <h5>Tv (on the air)</h5>
          <div className="row">
            {this.props.onTheAirTv.map((item, index) => {
              return (
                <div className="col-md-3 col-6 cover_image_board" key={index}>
                  <Link to={`/popular/movie/${item.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} className="cover__image" alt={item.title} />
                  </Link>
                  <h5>{item.original_name}</h5>
                </div>
              )
            })}
          </div>
        </div>
      </AppDrawer>
    )
  }
}

const mapStateToProps = ({ TvOntheair }) => {
  return {
    onTheAirTv: TvOntheair.ontheairTv
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAllTvOnTheAir: () => dispatch(tvOntheAirActions.getAllTvOnTheAir())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OnTheAir);