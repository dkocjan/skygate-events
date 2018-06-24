import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { Header } = Layout;
const { Item } = Menu;

const MainMenu = ({ pathname }) => (
  <Header style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[pathname]}
      style={{ lineHeight: '64px' }}
    >
      <Item key="/skygate-events/">
        <Link to="/skygate-events/">
          <span className="nav-text">SkyEvents</span>
        </Link>
      </Item>
      <Item key="/skygate-events/events">
        <Link to="/skygate-events/events">
          <Icon type="team" />
          <span className="nav-text">Browse</span>
        </Link>
      </Item>
      <Item key="/skygate-events/create">
        <Link to="/skygate-events/create">
          <Icon type="form" />
          <span className="nav-text">Create</span>
        </Link>
      </Item>
    </Menu>
  </Header>
);

MainMenu.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default MainMenu;
