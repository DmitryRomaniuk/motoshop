import {Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function toggleNav(state) {
    const isOpen = state.get('isOpen');
    return state.set('isOpen', !isOpen);
}

export default function (state = Map({'isOpen': false}), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'TOGGLE_NAV':
            return toggleNav(state);
        default:
            return state;
    }
}