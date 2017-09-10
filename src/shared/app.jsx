// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import TypeMotocycles from './component/page/typeMotocycles';
import LoginPage from './component/page/login';
import AdminComponent from './component/page/admin';
import ProtectedComponent from './component/page/protected';
import HomePage from './component/page/home';
import Footer from './component/footer';
import Nav from './component/nav';
import NotFoundPage from './component/page/not-found';
import { APP_NAME } from './config';
import * as routes from './routes';
import { getRoutes } from './action/homePage';

import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir, userIsAdminRedir } from './auth';

// Need to apply the hocs here to avoid applying them inside the render method
const Login = userIsNotAuthenticatedRedir(LoginPage);
const Protected = userIsAuthenticatedRedir(ProtectedComponent);
const Admin = userIsAuthenticatedRedir(userIsAdminRedir(AdminComponent));

class App extends Component {
  static defaultProps: Object;

  componentDidMount() {
    this.props.getListRoutes();
  }

  render() {
    return (<div style={{ paddingTop: 54 }}>
      <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
      <Nav />
      <Switch>
        <Route exact path={routes.HOME_PAGE_ROUTE} component={HomePage} />
        {Object.keys(this.props.motolist).map(routeMototype => (
          <Route path={routes[routeMototype]} key={routeMototype} render={() => <TypeMotocycles route={routes[routeMototype]} motoList={this.props.motolist[routeMototype]} />} />
        ))}
        <Route path={routes.LOGIN_ROUTE} component={Login} />
        <Route path={routes.PROTECTED_ROUTE} component={Protected} />
        <Route path={routes.ADMIN_ROUTE} component={Admin} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>);
  }
  }


App.propTypes = {
  // eslint-disable-next-line react/require-default-props
  getListRoutes: PropTypes.func,
  motolist: PropTypes.objectOf(PropTypes.shape({
    SUPER_SPORT_ROUTE: PropTypes.objectOf(PropTypes.shape({
      name: PropTypes.string,
      motos: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
      })),
    })),
  })),
};

App.defaultProps = {
  motolist: {
    SUPER_SPORT_ROUTE: {
      name: 'СУПЕР СПОРТ',
      motos: [{
        name: 'CBR500RA',
        image: 'CBR500R_archive.jpg',
      },
      ],
    },
  },
};

const mapStateToProps = state => ({
  motolist: state.listHome.get('listRoutes').toJS(),
});

export default connect(mapStateToProps, { getListRoutes: getRoutes })(App);
