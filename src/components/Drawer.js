import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { genresActions } from '../actions/genres';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const { Sider } = Layout;
const { SubMenu } = Menu;

class AppDrawer extends React.Component {
  componentDidMount() {
    this.props.getGenresListType();
  }
  render() {
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          width="240"
        >
          <div className="logo" />
          
          <Menu theme="light" mode="inline">
            <div style={{ marginTop: '20px' }}>
              <img src='/images/moviedb.svg' width="100%" />
            </div>
            <Menu.Item key="1">
              <Link to='/popular/movies'>
                <span className="nav-text">popular movies</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <span className="nav-text">Upcoming movies</span>
            </Menu.Item>
            <Menu.Item key="3">
              <span className="nav-text">movies</span>
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
                return <Menu.Item key={index}>{item.name}</Menu.Item>
              })}
            </SubMenu>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <div style={{ padding: '24px 10px', background: '#fff', minHeight: 360 }}>
            {this.props.children}
          </div>
        </Layout>
      </Layout> 
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