import React from 'react';
import AppDrawer from '../Drawer';
import { tvOntheAirActions } from '../../actions/tv/tvOnTheAir';
import { connect } from 'react-redux';

class OnTheAirDetail extends React.Component {
  componentDidMount() {
    this.props.getTvOnTheAirDetail({
      id: this.props.match.params.id
    })
    console.log(this.props)
  }
  render() {
    return (
      <AppDrawer>
        hi
      </AppDrawer>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTvOnTheAirDetail: data => dispatch(tvOntheAirActions.getTvOnTheAirDetail(data))
  }
}
export default connect(
  null,
  mapDispatchToProps
)(OnTheAirDetail);