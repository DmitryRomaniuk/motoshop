// @flow

import Immutable from 'immutable';
import type { fromJS as Immut } from 'immutable';
import {
  USER_LOGGING_IN,
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_CHECK_SHOPPING_CARD,
} from '../action/user';


const initialState = Immutable.fromJS({
    data: null,
    isLoading: false,
});
const initialDataAfterLogin = Immutable.fromJS({
    name: '',
    isAdmin: false,
    shoppingCart: [
        {
            id: 'ngk-simple',
            price: 15.6,
            title: 'Ngk',
            checked: false,
        },
    ],
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
        .set('data', initialDataAfterLogin)
        .setIn(['data', 'name'], action.payload.email)
        .setIn(['data', 'isAdmin'], action.payload.isAdmin);
    case USER_LOGGED_OUT:
        return initialState;
    case USER_CHECK_SHOPPING_CARD:
        return state.updateIn(['data', 'shoppingCart', '0', 'checked'], checked => !checked);
    default:
        return state;
    }
};

export default userReducer;
