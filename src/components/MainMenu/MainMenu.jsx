import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { Header } = Layout;

class MainMenu extends PureComponent {
  state = {
    pathname: '',
  };

  componentWillMount() {
    const { pathname } = this.props.location;
    this.setState({
      pathname,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { pathname } = nextProps.location;
    this.setState({
      pathname,
    });
  }

  render() {
    const { Item } = Menu;

    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[this.state.pathname]}
          style={{ lineHeight: '64px' }}
        >
          <Item key="/">
            <Link to="/">
              <span className="nav-text">SkyEvents</span>
            </Link>
          </Item>
          <Item key="/events">
            <Link to="/events">
              <Icon type="schedule" />
              <span className="nav-text">Browse</span>
            </Link>
          </Item>
          <Item key="/create">
            <Link to="/create">
              <Icon type="file-text" />
              <span className="nav-text">Create</span>
            </Link>
          </Item>
        </Menu>
      </Header>
    );
  }
}

MainMenu.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default MainMenu;
