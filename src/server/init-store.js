// @flow

import Immutable from 'immutable';
import {
    createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
    reducer as reduxFormReducer,
} from 'redux-form';

import helloReducer from '../shared/reducer/hello';
import userReducer from '../shared/reducer/user';
import listHome from '../shared/reducer/homePage';

const initStore = (plainPartialState: ? Object) => {
  const preloadedState = plainPartialState ? {} : undefined;

  if (plainPartialState && plainPartialState.hello) {
        // flow-disable-next-line
    preloadedState.hello = helloReducer(undefined, {})
            .merge(Immutable.fromJS(plainPartialState.hello));
        // flow-disable-next-line
    preloadedState.listHome = helloReducer(undefined, {})
            .merge(Immutable.fromJS(plainPartialState.listHome));
        // flow-disable-next-line
    preloadedState.user = userReducer(undefined, {})
            .merge(Immutable.fromJS(plainPartialState.user));
  }

  return createStore(combineReducers({
    hello: helloReducer,
    form: reduxFormReducer,
    user: userReducer,
    listHome,
  }),
        preloadedState, applyMiddleware(thunkMiddleware));
};

export default initStore;
