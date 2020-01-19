import React from 'react';
import AppDrawer from '../Drawer';
import { creditActions } from '../../actions/movies/credits';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SingleCredit extends React.Component {
  componentDidMount() {
    this.props.getSingleCreditByMovie({
      id: this.props.match.params.id
    });
  }
  render() {
    const { person } = this.props;
    return (
      <AppDrawer>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={`
                ${person.profile_path
                  ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${person.profile_path}`
                  : '/images/default_user.png'
                } 
              `} alt={person.title} />
            </div>
            <div className="col-md-6">
              <h6>{person.name}</h6>
              <h6>Biography</h6>
              <p></p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h5>Personal info</h5>
              <h6>known for</h6>
              <span>{person.known_for_department}</span>


              <h6>gender</h6>
              <span>{person.gender == 2 ? 'Male' : 'Female'}</span>
            </div>
            <div className="col-md-6">
              <div className="row">
                {person.known_for.map((item, index) => {
                  return (
                    <div className="col col-md-4 col-6 cover_image_board" key={index}>
                      <Link to={`/popular/movie/${item.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`} className="cover__image" alt={item.title} />
                      </Link>
                      <h6>{item.title}</h6>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

      </AppDrawer>
    )
  }
}

const mapStateToProps = ({ credits }) => {
  return {
    person: credits.singleCredit.person
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleCreditByMovie: data => dispatch(creditActions.getSingleCredit(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCredit);