import React from 'react';
import logo from '../../public/icons/logo.svg';
import './App.css';
import {NavigatorBarContainer as NavigatorBar} from './NavigatorBar';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <NavigatorBar />
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default App;
