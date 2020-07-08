import { mockData } from '../mock-data/mock_data';
const tasksReducerDefaultState = [];


const tasksReducer = (state = tasksReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_TASKS':
            return mockData;
        default:
            return state;
    }
};

export default tasksReducer;