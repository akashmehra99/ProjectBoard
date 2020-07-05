import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Header from './components/Header';
import Dashboard from './components/Dashboard';

const jsx = (
    <React.Fragment>
        <Header />
        <Dashboard />
    </React.Fragment>
);

ReactDOM.render(jsx, document.getElementById('app'));
