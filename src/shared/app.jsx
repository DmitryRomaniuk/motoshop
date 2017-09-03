// @flow

import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import TypeMotocycles from './component/page/typeMotocycles';
import LoginPage from './component/page/login';
import HomePage from './component/page/home';
import Footer from './component/footer';
import Nav from './component/nav';
import NotFoundPage from './component/page/not-found';
import { APP_NAME } from './config';
import * as routes from './routes';
import motolist from './getTypeMoto.json';

const App = () =>
  <div style={{ paddingTop: 54 }}>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Nav />
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
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>;

export default App;
