import { createStore, combineReducers } from 'redux';
import tasksReducer  from '../reducers/tasks';
import filtersReducer from '../reducers/filters';

// Store creation

const store = createStore(
    combineReducers({
        tasks: tasksReducer,
        filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
