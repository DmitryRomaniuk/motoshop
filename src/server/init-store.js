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

import userReducer from '../shared/reducer/user';
import listHome from '../shared/reducer/homePage';

const initStore = (plainPartialState: ? Object) => {
    const preloadedState = plainPartialState ? {} : undefined;

    if (plainPartialState && plainPartialState.hello) {
    // flow-disable-next-line
        preloadedState.listHome = listHome(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.listHome));
    // flow-disable-next-line
        preloadedState.user = userReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.user));
    }

    return createStore(combineReducers({
        form: reduxFormReducer,
        user: userReducer,
        listHome,
    }),
  preloadedState, applyMiddleware(thunkMiddleware));
};

export default initStore;
