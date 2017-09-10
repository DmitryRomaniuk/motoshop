// @flow

import 'isomorphic-fetch';

import { createAction } from 'redux-actions';
import {
  HOME_PAGE_LIST_ROUTE,
  HOME_PAGE_GET_ROUTES_LIST_ROUTE,
 } from '../../shared/routes';

export const GET_LIST_MOTO_HOME_PAGE_ASYNC_REQUEST = 'GET_LIST_MOTO_HOME_PAGE_ASYNC_REQUEST';
export const GET_LIST_MOTO_HOME_PAGE_ASYNC_SUCCESS = 'GET_LIST_MOTO_HOME_PAGE_ASYNC_SUCCESS';
export const GET_LIST_MOTO_HOME_PAGE_ASYNC_FAILURE = 'GET_LIST_MOTO_HOME_PAGE_ASYNC_FAILURE';

export const getListAsyncRequest = createAction(GET_LIST_MOTO_HOME_PAGE_ASYNC_REQUEST);
export const getListAsyncSuccess = createAction(GET_LIST_MOTO_HOME_PAGE_ASYNC_SUCCESS);
export const getListAsyncFailure = createAction(GET_LIST_MOTO_HOME_PAGE_ASYNC_FAILURE);

export const getList = () => (dispatch: Function) => {
  dispatch(getListAsyncRequest());
  return fetch(HOME_PAGE_LIST_ROUTE, { method: 'GET' })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((data) => {
      if (!data) throw Error('No message received');
      dispatch(getListAsyncSuccess(data));
    })
    .catch(() => {
      dispatch(getListAsyncFailure());
    });
};

export const GET_LIST_ROUTES_ASYNC_REQUEST = 'GET_LIST_ROUTES_ASYNC_REQUEST';
export const GET_LIST_ROUTES_ASYNC_SUCCESS = 'GET_LIST_ROUTES_ASYNC_SUCCESS';
export const GET_LIST_ROUTES_ASYNC_FAILURE = 'GET_LIST_ROUTES_ASYNC_FAILURE';

export const getRoutesAsyncRequest = createAction(GET_LIST_ROUTES_ASYNC_REQUEST);
export const getRoutesAsyncSuccess = createAction(GET_LIST_ROUTES_ASYNC_SUCCESS);
export const getRoutesAsyncFailure = createAction(GET_LIST_ROUTES_ASYNC_FAILURE);

export const getRoutes = () => (dispatch: Function) => {
  dispatch(getRoutesAsyncRequest());
  return fetch(HOME_PAGE_GET_ROUTES_LIST_ROUTE, { method: 'GET' })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then((data) => {
      if (!data) throw Error('No message received');
      dispatch(getRoutesAsyncSuccess(data));
    })
    .catch(() => {
      dispatch(getRoutesAsyncFailure());
    });
};
