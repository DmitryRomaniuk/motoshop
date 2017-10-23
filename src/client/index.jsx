// @flow

import 'babel-polyfill';

import Immutable from 'immutable';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import Tether from 'tether';
import Popper from 'popper.js';
import { reducer as reduxFormReducer } from 'redux-form';

import App from '../shared/app';
import { APP_CONTAINER_SELECTOR, JSS_SSR_SELECTOR, isProd } from '../shared/config';
import userReducer from '../shared/reducer/user';
import listHome from '../shared/reducer/homePage';

window.jQuery = $;
window.Tether = Tether;
window.Popper = Popper;
require('bootstrap');

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const preloadedState = window.__PRELOADED_STATE__;
/* eslint-enable no-underscore-dangle */
const history = createHistory();
const middlewareRouter = routerMiddleware(history);
const store = createStore(combineReducers(
    {
        form: reduxFormReducer,
        user: userReducer,
        listHome,
        router: routerReducer,
    }),
    {
        user: Immutable.fromJS(preloadedState.user),
        listHome: Immutable.fromJS(preloadedState.listHome),
    },
composeEnhancers(applyMiddleware(thunkMiddleware, middlewareRouter)));

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR);

const wrapApp = (AppComponent, reduxStore) =>
  (<Provider store={reduxStore}>
    <ConnectedRouter history={history}>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </ConnectedRouter>
  </Provider>);

ReactDOM.render(wrapApp(App, store), rootEl);

if (module.hot) {
  // flow-disable-next-line
    module.hot.accept('../shared/app', () => {
    // eslint-disable-next-line global-require
        const NextApp = require('../shared/app').default;
        ReactDOM.render(wrapApp(NextApp, store), rootEl);
    });
}

const jssServerSide = document.querySelector(JSS_SSR_SELECTOR);
// flow-disable-next-line
jssServerSide.parentNode.removeChild(jssServerSide);
