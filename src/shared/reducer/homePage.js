// @flow

import Immutable from 'immutable';
import type { fromJS as Immut } from 'immutable';

import {
  GET_LIST_MOTO_HOME_PAGE_ASYNC_REQUEST,
  GET_LIST_MOTO_HOME_PAGE_ASYNC_SUCCESS,
  GET_LIST_MOTO_HOME_PAGE_ASYNC_FAILURE,
  GET_LIST_ROUTES_ASYNC_REQUEST,
  GET_LIST_ROUTES_ASYNC_SUCCESS,
  GET_LIST_ROUTES_ASYNC_FAILURE,
} from '../action/homePage';

const initialState = Immutable.fromJS({
    listMoto: {
        STREET: {
            name: 'STREET',
            image: 'street.jpg',
            description: 'Attitude. All-round style. Sheer riding enjoyment',
        },
    },
    listRoutes: {
        SUPER_SPORT_ROUTE: {
            name: '',
            motos: [{
                name: '',
                image: '',
            },
            ],
        },
        SPORT_TOURING_ROUTE: {
            name: '',
            motos: [{
                name: '',
                image: '',
            },
            ],
        },
        TOURING_ROUTE: {
            name: '',
            motos: [{
                name: '',
                image: '',
            },
            ],
        },
        STREET_ROUTE: {
            name: '',
            motos: [{
                name: '',
                image: '',
            },
            ],
        },
        ADVENTURE_ROUTE: {
            name: '',
            motos: [{
                name: '',
                image: '',
            },
            ],
        },
        OFF_ROAD_ROUTE: {
            name: '',
            motos: [{
                name: '',
                image: '',
            },
            ],
        },
        SCOOTER_ROUTE: {
            name: '',
            motos: [{
                name: '',
                image: '',
            },
            ],
        },
        ATV_ROUTE: {
            name: '',
            motos: [{
                name: '',
                image: '',
            },
            ],
        },
        CUSTOM_ROUTE: {
            name: '',
            motos: [{
                name: '',
                image: '',
            },
            ],
        },
        V125CC_ROUTE: {
            name: '',
            motos: [{
                name: '',
                image: '',
            },
            ],
        },
    },
});

const homeReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
    case GET_LIST_MOTO_HOME_PAGE_ASYNC_REQUEST:
        return state;
    case GET_LIST_MOTO_HOME_PAGE_ASYNC_SUCCESS:
        return state.set('listMoto', Immutable.fromJS(action.payload));
    case GET_LIST_MOTO_HOME_PAGE_ASYNC_FAILURE:
        return state;
    case GET_LIST_ROUTES_ASYNC_REQUEST:
        return state;
    case GET_LIST_ROUTES_ASYNC_SUCCESS:
        return state.set('listRoutes', Immutable.fromJS(action.payload));
    case GET_LIST_ROUTES_ASYNC_FAILURE:
        return state;
    default:
        return state;
    }
};

export default homeReducer;
