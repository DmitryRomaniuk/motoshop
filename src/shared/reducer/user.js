// @flow

import Immutable from 'immutable';
import type {
  fromJS as Immut,
} from 'immutable';
import {
  USER_LOGGING_IN,
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
} from '../action/user';


const initialState = Immutable.fromJS({
    data: null,
    isLoading: false,
});

const userReducer = (state: Immut = initialState, action: {
    type: string,
    payload: any
}) => {
    switch (action.type) {
    case USER_LOGGING_IN:
        return state.set('isLoading', true);
    case USER_LOGGED_IN:
        return state.set('isLoading', false)
        .set('data', Immutable.fromJS({ name: '', isAdmin: false }))
        .setIn(['data', 'name'], action.payload.login)
        .setIn(['data', 'isAdmin'], action.payload.isAdmin);
    case USER_LOGGED_OUT:
        return initialState;
    default:
        return state;
    }
};

export default userReducer;
