// @flow

import { createAction } from 'redux-actions';

export const USER_LOGGING_IN = 'USER_LOGGING_IN';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

export const userLoggingIn = createAction(USER_LOGGING_IN);
export const userLoggedIn = createAction(USER_LOGGED_IN);
export const userLoggedOut = createAction(USER_LOGGED_OUT);

export const login = (data: {data: any}) => (dispatch: Function) => {
    dispatch(userLoggingIn());
    return setTimeout(() => {
        dispatch(userLoggedIn(data));
    }, 1);
};

export const logout = () => (dispatch: Function) => dispatch(userLoggedOut());
