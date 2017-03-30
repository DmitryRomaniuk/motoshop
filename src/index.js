import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import App from './components/App';
import PreviewMoto from './components/PreviewMoto';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(reducer);

console.log(store);

const listMoto=[{"name": "CBR1000RA Fireblade 2017", "srcImg":"/images/black_310.png", "price": 10000},
{"name": "CBR300RA", "srcImg":"/images/CBR300RA_overview_new-1_00.png", "price": 12000},
{"name": "CBR600RA 2017", "srcImg":"/images/cbr600_310.jpg", "price": 14000}];

const component = (
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={App}/>
            <Route exact path="super-sport" component={() => (<PreviewMoto listMoto={listMoto}/>)}/>
        </Route>
    </Router>
);


ReactDOM.render(
    <Provider store={store}>
            {component}
    </Provider>,
    document.getElementById('root')
);
