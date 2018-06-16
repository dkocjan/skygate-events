import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// App styles and route transitions
import './AppLayout.css';
import './transitions.css';

// Routes
import indexRoutes from '../../routes';

// Views & Components
import PageNotFound from '../../views/PageNotFound';
import MainMenu from '../../components/MainMenu';
import SiteFooter from '../../components/SiteFooter';

class AppLayout extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { Content } = Layout;
    const { location } = this.props;
    return (
      <Layout>
        <MainMenu pathname={this.props.location.pathname} />
        <Content className="app__content">
          <TransitionGroup>
            <CSSTransition
              timeout={200}
              classNames="slide"
              transitionAppearTimeout={200}
              transitionEnterTimeout={200}
              transitionExitTimeout={50}
              unmountOnExit
              key={location.key}
            >
              <Switch>
                {indexRoutes.map(prop => (
                  <Route
                    exact
                    path={prop.path}
                    component={prop.component}
                    key={prop.name}
                  />
                ))}
                <Route render={() => <PageNotFound location={location} />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Content>
        <SiteFooter />
      </Layout>
    );
  }
}

AppLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default AppLayout;
