// @flow

import {
  homePage,
  helloPage,
  helloAsyncPage,
  helloEndpoint,
} from './controller';

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
  CUSTOM_ROUTE,
  V125CC_ROUTE,
  LOGIN_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  helloEndpointRoute,
} from '../shared/routes';

import renderApp from './render-app';

export default (app: Object) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, homePage()));
  });

  app.get(SUPER_SPORT_ROUTE, (req, res) => {
    res.send(renderApp(req.url));
  });

  app.get(SPORT_TOURING_ROUTE, (req, res) => {
    res.send(renderApp(req.url));
  });

  app.get(TOURING_ROUTE, (req, res) => {
    res.send(renderApp(req.url));
  });

  app.get(ADVENTURE_ROUTE, (req, res) => {
    res.send(renderApp(req.url));
  });

  app.get(STREET_ROUTE, (req, res) => {
    res.send(renderApp(req.url));
  });

  app.get(OFF_ROAD_ROUTE, (req, res) => {
    res.send(renderApp(req.url));
  });

  app.get(SCOOTER_ROUTE, (req, res) => {
    res.send(renderApp(req.url));
  });

  app.get(ATV_ROUTE, (req, res) => {
    res.send(renderApp(req.url));
  });

  app.get(CUSTOM_ROUTE, (req, res) => {
    res.send(renderApp(req.url));
  });

  app.get(V125CC_ROUTE, (req, res) => {
    res.send(renderApp(req.url));
  });

  app.get(LOGIN_ROUTE, (req, res) => {
    res.send(renderApp(req.url));
  });

  app.post(LOGIN_ROUTE, (req, res) => {
    res.redirect(HOME_PAGE_ROUTE);
  });

  app.get(HELLO_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, helloPage()));
  });

  app.get(HELLO_ASYNC_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, helloAsyncPage()));
  });

  app.get(helloEndpointRoute(), (req, res) => {
    res.json(helloEndpoint(req.params.num));
  });

  app.get('/500', () => {
    throw Error('Fake Internal Server Error');
  });

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url));
  });

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
};
