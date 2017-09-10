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
        <Route path={routes.SUPER_SPORT_ROUTE} render={() => <TypeMotocycles route={routes.SUPER_SPORT_ROUTE} motoList={this.props.motolist.SUPER_SPORT_ROUTE} />} />
        <Route path={routes.SPORT_TOURING_ROUTE} render={() => <TypeMotocycles route={routes.SPORT_TOURING_ROUTE} motoList={this.props.motolist.SPORT_TOURING_ROUTE} />} />
        <Route path={routes.TOURING_ROUTE} render={() => <TypeMotocycles route={routes.TOURING_ROUTE} motoList={this.props.motolist.TOURING_ROUTE} />} />
        <Route path={routes.ADVENTURE_ROUTE} render={() => <TypeMotocycles route={routes.ADVENTURE_ROUTE} motoList={this.props.motolist.ADVENTURE_ROUTE} />} />
        <Route path={routes.STREET_ROUTE} render={() => <TypeMotocycles route={routes.STREET_ROUTE} motoList={this.props.motolist.STREET_ROUTE} />} />
        <Route path={routes.OFF_ROAD_ROUTE} render={() => <TypeMotocycles route={routes.OFF_ROAD_ROUTE} motoList={this.props.motolist.OFF_ROAD_ROUTE} />} />
        <Route path={routes.SCOOTER_ROUTE} render={() => <TypeMotocycles route={routes.SCOOTER_ROUTE} motoList={this.props.motolist.SCOOTER_ROUTE} />} />
        <Route path={routes.CUSTOM_ROUTE} render={() => <TypeMotocycles route={routes.CUSTOM_ROUTE} motoList={this.props.motolist.CUSTOM_ROUTE} />} />
        <Route path={routes.V125CC_ROUTE} render={() => <TypeMotocycles route={routes.V125CC_ROUTE} motoList={this.props.motolist.V125CC_ROUTE} />} />
        <Route path={routes.ATV_ROUTE} render={() => <TypeMotocycles route={routes.ATV_ROUTE} motoList={this.props.motolist.ATV_ROUTE} />} />
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
      name: '',
      motos: [{
        name: '',
        image: '',
      },
      ],
    },
    SPORT_TOURING_ROUTE: {
      name: '',
      motos: [{
        name: '',
        image: '',
      },
      ],
    },
    TOURING_ROUTE: {
      name: '',
      motos: [{
        name: '',
        image: '',
      },
      ],
    },
    ADVENTURE_ROUTE: {
      name: '',
      motos: [{
        name: '',
        image: '',
      },
      ],
    },
    OFF_ROAD_ROUTE: {
      name: '',
      motos: [{
        name: '',
        image: '',
      },
      ],
    },
    SCOOTER_ROUTE: {
      name: '',
      motos: [{
        name: '',
        image: '',
      },
      ],
    },
    ATV_ROUTE: {
      name: '',
      motos: [{
        name: '',
        image: '',
      },
      ],
    },
    CUSTOM_ROUTE: {
      name: '',
      motos: [{
        name: '',
        image: '',
      },
      ],
    },
    V125CC_ROUTE: {
      name: '',
      motos: [{
        name: '',
        image: '',
      },
      ],
    },
  },
};

const mapStateToProps = state => ({
  motolist: state.listHome.get('listRoutes').toJS(),
});

export default connect(mapStateToProps, { getListRoutes: getRoutes })(App);
