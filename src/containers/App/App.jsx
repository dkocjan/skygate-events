import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Icon } from 'antd';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Routes
import indexRoutes from '../../routes';

// Styles for route transitions
import './styles.css';

// Components
import MainMenu from '../../components/MainMenu';
import SiteFooter from '../../components/Footer';

const { Content } = Layout;

const App = () => (
  <Router>
    <Route
      render={({ location }) => (
        <Layout>
          <MainMenu location={location} />
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <TransitionGroup>
              <CSSTransition
                timeout={300}
                classNames="slide"
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionExitTimeout={200}
                unmountOnExit
                key={location.key}
              >
                <Switch location={location}>
                  {indexRoutes.map(prop => (
                    <Route
                      exact
                      path={prop.path}
                      component={prop.component}
                      key={prop.name}
                    />
                  ))}
                  <Route
                    render={() => (
                      <h1>
                        Page not found <Icon type="frown-o" />
                      </h1>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Content>
          <SiteFooter />
        </Layout>
      )}
    />
  </Router>
);

export default App;
