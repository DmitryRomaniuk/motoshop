// @flow

import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import TypeMotocycles from './component/page/typeMotocycles';
import HelloPage from './component/page/hello';
import HelloAsyncPage from './component/page/hello-async';
import HomePage from './component/page/home';
import Footer from './component/footer';
import Nav from './component/nav';
import NotFoundPage from './component/page/not-found';
import { APP_NAME } from './config';
import {
  HOME_PAGE_ROUTE,
  SUPER_SPORT_ROUTE,
  SPORT_TOURING_ROUTE,
  TOURING_ROUTE,
  ADVENTURE_ROUTE,
  STREET_ROUTE,
  OFF_ROAD_ROUTE,
  SCOOTER_ROUTE,
  ATV_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
} from './routes';
import motolist from './getTypeMoto.json';

const App = () =>
  <div style={{ paddingTop: 54 }}>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Nav />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
      <Route path={SUPER_SPORT_ROUTE} render={() => <TypeMotocycles route={SUPER_SPORT_ROUTE} motoList={motolist.SUPER_SPORT_ROUTE} />} />
      <Route path={SPORT_TOURING_ROUTE} render={() => <TypeMotocycles route={SPORT_TOURING_ROUTE} motoList={motolist.SPORT_TOURING_ROUTE} />} />
      <Route path={TOURING_ROUTE} render={() => <TypeMotocycles route={TOURING_ROUTE} motoList={motolist.TOURING_ROUTE} />} />
      <Route path={ADVENTURE_ROUTE} render={() => <TypeMotocycles route={ADVENTURE_ROUTE} motoList={motolist.ADVENTURE_ROUTE} />} />
      <Route path={STREET_ROUTE} render={() => <TypeMotocycles route={STREET_ROUTE} motoList={motolist.STREET_ROUTE} />} />
      <Route path={OFF_ROAD_ROUTE} render={() => <TypeMotocycles route={OFF_ROAD_ROUTE} motoList={motolist.OFF_ROAD_ROUTE} />} />
      <Route path={SCOOTER_ROUTE} render={() => <TypeMotocycles route={SCOOTER_ROUTE} motoList={motolist.SCOOTER_ROUTE} />} />
      <Route path={ATV_ROUTE} render={() => <TypeMotocycles route={ATV_ROUTE} motoList={motolist.ATV_ROUTE} />} />
      <Route path={HELLO_ASYNC_PAGE_ROUTE} render={() => <HelloAsyncPage />} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>;

export default App;
