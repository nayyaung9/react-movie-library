import React from 'react';
import { Layout, Menu, Icon, Drawer } from 'antd';
import { genresActions } from '../actions/movies/genres';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import tvList from './TvList';
const { Header } = Layout;
const { SubMenu } = Menu;

class AppDrawer extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  componentDidMount() {
    this.props.getGenresListType();
  }
  render() {
    return (
      <React.Fragment>
        <Header style={{ color: 'black' }}>
          <div className="logo" />
          <div className="row">
            <div className="col-2">

              <Icon type="menu" onClick={this.showDrawer} />
            </div>
            <div className="col-8 text-center">
              <Link to='/'>
                <span className="header_anchor">Movie Database</span>
              </Link>
            </div>
            <div className="col-2 text-right">
              <Link to='/search'>
              <Icon type="search" style={{ fontSize: '20px' }} />
              </Link>
              
            </div>
          </div>
        </Header>

        <Drawer
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Menu theme="light" mode="inline">
            <div style={{ marginTop: '20px' }} className="text-center">
              <Link to='/'><img src='/images/moviedb.svg' width="75%" alt="moviedb" /></Link>
            </div>
            <Menu.Item key="1">
              <Link to='/popular/movies'>
                <span className="nav-text">Popular Movies</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/upcoming/movies'>
                <span className="nav-text"> Upcoming Movies </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/now_playing">
                <span className="nav-text">Now Playing</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/top_rated/movies">
                <span className="nav-text">Top Rated</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Genre movies</span>
                </span>
              }
            >
              {this.props.genres.map((item, index) => {
                return (
                  
                  <Menu.Item key={index}>
                    <Link to={`/genres/${item.name.toLowerCase()}/${item.id}`}>{item.name}</Link></Menu.Item>
                  
                 
                )
              })}
            </SubMenu>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="user" />
                  <span>tv</span>
                </span>
              }
            >
              {tvList.tv.map((item, index) => {
                return (
                  <Menu.Item key={index}>
                    <Link to={item.route}>{item.name}</Link>
                  </Menu.Item>
                )
              })}
            </SubMenu>
          </Menu>
        </Drawer>

        <Layout style={{ background: '#fff' }}>
         
            {this.props.children}
        
        </Layout>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    genres: state.genres.genres
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGenresListType: () => dispatch(genresActions.getGenresListType())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppDrawer);