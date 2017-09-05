// @flow

import React from 'react';
import { Switch } from 'react-router';
import { Route, NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import TypeMotocycles from './component/page/typeMotocycles';
import LoginPage from './component/page/login';
import HomePage from './component/page/home';
import Footer from './component/footer';
import Nav from './component/nav';
import NotFoundPage from './component/page/not-found';
import { APP_NAME } from './config';
import * as routes from './routes';
import motolist from './getTypeMoto.json';

import { logout } from './action/user';
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir, userIsAdminRedir,
         userIsAuthenticated, userIsNotAuthenticated } from './auth';

import AdminComponent from './Admin';
import ProtectedComponent from './Protected';

const getUserName = (user) => {
  if (user.data) {
    return `Welcome ${user.data.name}`;
  }
  return 'Not logged in';
};

// Need to apply the hocs here to avoid applying them inside the render method
const Login = userIsNotAuthenticatedRedir(LoginPage);
const Protected = userIsAuthenticatedRedir(ProtectedComponent);
const Admin = userIsAuthenticatedRedir(userIsAdminRedir(AdminComponent));

// Only show login when the user is not logged in and logout when logged in
// Could have also done this with a single wrapper and `FailureComponent`
const UserName = ({ user }: {user: string}) => (<div className={''}>{getUserName(user)}</div>);
const LoginLink = userIsNotAuthenticated(() => <NavLink className={''} to="/login">Login</NavLink>);
const LogoutLink = userIsAuthenticated(({ logout }: {logout: Function}) => <a href="/" onClick={() => logout()}>Logout</a>);

const App = ({ user, logout }: {user: string, logout: Function}) =>
  <div style={{ paddingTop: 54 }}>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Nav />
    <LoginLink />
    <LogoutLink logout={logout} />
    <UserName user={user} />
    <Switch>
      <Route exact path={routes.HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route path={routes.SUPER_SPORT_ROUTE} render={() => <TypeMotocycles route={routes.SUPER_SPORT_ROUTE} motoList={motolist.SUPER_SPORT_ROUTE} />} />
      <Route path={routes.SPORT_TOURING_ROUTE} render={() => <TypeMotocycles route={routes.SPORT_TOURING_ROUTE} motoList={motolist.SPORT_TOURING_ROUTE} />} />
      <Route path={routes.TOURING_ROUTE} render={() => <TypeMotocycles route={routes.TOURING_ROUTE} motoList={motolist.TOURING_ROUTE} />} />
      <Route path={routes.ADVENTURE_ROUTE} render={() => <TypeMotocycles route={routes.ADVENTURE_ROUTE} motoList={motolist.ADVENTURE_ROUTE} />} />
      <Route path={routes.STREET_ROUTE} render={() => <TypeMotocycles route={routes.STREET_ROUTE} motoList={motolist.STREET_ROUTE} />} />
      <Route path={routes.OFF_ROAD_ROUTE} render={() => <TypeMotocycles route={routes.OFF_ROAD_ROUTE} motoList={motolist.OFF_ROAD_ROUTE} />} />
      <Route path={routes.SCOOTER_ROUTE} render={() => <TypeMotocycles route={routes.SCOOTER_ROUTE} motoList={motolist.SCOOTER_ROUTE} />} />
      <Route path={routes.CUSTOM_ROUTE} render={() => <TypeMotocycles route={routes.CUSTOM_ROUTE} motoList={motolist.CUSTOM_ROUTE} />} />
      <Route path={routes.V125CC_ROUTE} render={() => <TypeMotocycles route={routes.V125CC_ROUTE} motoList={motolist.V125CC_ROUTE} />} />
      <Route path={routes.ATV_ROUTE} render={() => <TypeMotocycles route={routes.ATV_ROUTE} motoList={motolist.ATV_ROUTE} />} />
      <Route path={routes.LOGIN_ROUTE} render={() => <LoginPage />} />
      <Route path="/protected" component={Protected} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>;

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, { logout })(App);
