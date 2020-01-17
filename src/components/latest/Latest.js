import React from 'react';
import AppDrawer from '../Drawer';
import { latestActions } from '../../actions/movies/latest';
import { connect } from 'react-redux';

class Latest extends React.Component {
  componentDidMount() {
    this.props.getMovieLatest();
  }
  render() {
    return (
      <AppDrawer>

      </AppDrawer>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMovieLatest: () => dispatch(latestActions.getMovieLatest())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Latest);