// @flow

import Immutable from 'immutable';
import type { fromJS as Immut } from 'immutable';

import {
  GET_LIST_MOTO_HOME_PAGE_ASYNC_REQUEST,
  GET_LIST_MOTO_HOME_PAGE_ASYNC_SUCCESS,
  GET_LIST_MOTO_HOME_PAGE_ASYNC_FAILURE,
} from '../action/homePage';

const initialState = Immutable.fromJS({
  listMoto: {
    STREET: {
      name: 'STREET',
      image: 'street.jpg',
      description: 'Attitude. All-round style. Sheer riding enjoyment',
    },
  },
});

const homeReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case GET_LIST_MOTO_HOME_PAGE_ASYNC_REQUEST:
      return state;
    case GET_LIST_MOTO_HOME_PAGE_ASYNC_SUCCESS:
      // console.log(state);
      return state.set('listMoto', Immutable.fromJS(action.payload));
    case GET_LIST_MOTO_HOME_PAGE_ASYNC_FAILURE:
      return state;
    default:
      return state;
  }
};

export default homeReducer;
