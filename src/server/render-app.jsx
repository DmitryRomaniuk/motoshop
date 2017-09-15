// @flow

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import { JssProvider, SheetsRegistry } from 'react-jss';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

import initStore from './init-store';
import App from '../shared/app';
import { APP_CONTAINER_CLASS, JSS_SSR_CLASS, STATIC_PATH, WDS_PORT, isProd } from '../shared/config';

const renderApp = (location: string, plainPartialState: ?Object, routerContext: ?Object = {}) => {
    const store = initStore(plainPartialState);
    const sheets = new SheetsRegistry();
    const appHtml = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={location} context={routerContext}>
          <JssProvider registry={sheets}>
            <App />
          </JssProvider>
        </StaticRouter>
      </Provider>);
    const head = Helmet.rewind();

    return (
    `<!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        <link rel="stylesheet" href="${STATIC_PATH}/css/bootstrap.min.css">
        <link rel="stylesheet" href="${STATIC_PATH}/css/styles.css">
        <link rel="icon" href="${STATIC_PATH}/img/favicon.ico" type="image/x-icon">
        <style class="${JSS_SSR_CLASS}">${sheets.toString()}</style>
        <script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script>
        <meta name="google-signin-client_id" content="531377804450-btbemp64o9gg3njdcviopev61dude95j.apps.googleusercontent.com">
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script>
        function onSignIn(googleUser) {
          var profile = googleUser.getBasicProfile();
          console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
          console.log('Name: ' + profile.getName());
          console.log('Image URL: ' + profile.getImageUrl());
          console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        }
        function onSuccess(googleUser) {
          console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
        }
        function onFailure(error) {
          console.log(error);
        }
        function renderButton() {
          gapi.signin2.render('my-signin2', {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': onSuccess,
            'onfailure': onFailure
          });
        }
        </script>
        <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>`
    );
};

export default renderApp;
