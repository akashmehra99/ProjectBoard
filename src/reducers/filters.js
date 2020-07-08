// Filters Reducer

const filtersReducerDefaultState = {
    status: ''
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ON_TRACK':
            return {
                ...state,
                status: action.text
            };
        case 'DELAYED':
            return {
                ...state,
                status: action.text
            };
        case 'ON_HOLD':
            return {
                ...state,
                status: action.text
            };
        default:
            return state;
    }
};

export default filtersReducer;