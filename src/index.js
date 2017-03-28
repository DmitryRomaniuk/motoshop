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
import PreviewMoto from './components/PreviewMoto';
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
                <div>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/super-sport" component={() => (<PreviewMoto
                        listMoto={[{"name": "CBR1000RA Fireblade 2017", "srcImg":"/images/black_310.png", "price": 10000},
                            {"name": "CBR300RA", "srcImg":"/images/CBR300RA_overview_new-1_00.png", "price": 12000},
                            {"name": "CBR600RA 2017", "srcImg":"/images/cbr600_310.jpg", "price": 14000}]} />)}/>
                </div>
            </Router>
            <Footer />
        </div>
    </Provider>,
    document.getElementById('root')
);
