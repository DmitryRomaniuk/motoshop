// @flow

import Immutable from 'immutable';
import type {
    fromJS as Immut,
} from 'immutable';
import * as constants from '../constants';

const initialState = Immutable.fromJS({
  data: null,
  isLoading: false,
});

const userReducer = (state: Immut = initialState, action: {
    type: string,
    payload: any
}) => {
  switch (action.type) {
    case constants.USER_LOGGING_IN:
      return state.set('isLoading', true);
    case constants.USER_LOGGED_IN:
      return state.set('data', action.payload).set('isLoading', false);
    case constants.USER_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
