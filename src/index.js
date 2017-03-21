import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import App from './components/App';
import {NavigatorBarContainer as NavigatorBar} from './components/NavigatorBar';
import Footer from './components/Footer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(reducer);

console.log(store);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <NavigatorBar />
            <Router>
                <Route exact path="/" component={App}/>
            </Router>
            <Footer />
        </div>
    </Provider>,
    document.getElementById('root')
);
