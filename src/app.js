import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Header from './components/Header';
import Dashboard from './components/Dashboard';

import { getTasks } from './actions/tasks';

const appStore = store;

appStore.dispatch(getTasks());

const jsx = (
    <Provider store={appStore}>
        <React.Fragment>
            <Header />
            <Dashboard />
        </React.Fragment>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
