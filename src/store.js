import { createStore, combineReducers } from 'redux';

const initialTaskState = {
    enabled: true,
    fillForm: false,
};

// The User Reducer
const taskReducer = function(state = initialTaskState, action) {
    switch(action.type) {
        case 'CREATE_NEW_TASK':
            return Object.assign({}, state, { fillForm: true });
        case 'CHOOSE_LOCATION':
            return Object.assign({}, state, { enabled: true });
    }
    return state;
};

// The Widget Reducer
const mapReducer = function(state = {}, action) {
    return state;
};

// Combine Reducers
const reducers = combineReducers({
    taskState: taskReducer,
    mapState: mapReducer
});

const store = createStore(reducers);
export default store;