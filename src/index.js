import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={App}/>
        </Router>
    </Provider>,
  document.getElementById('root')
);
