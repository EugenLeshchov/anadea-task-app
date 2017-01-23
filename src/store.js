import { createStore, combineReducers } from 'redux';

const initialTaskState = {
    openForm: false,
    description: '',
    serviceType: null
};

const initialMapState = {
    locationSelected: false
};

// The User Reducer
const taskReducer = function(state = initialTaskState, action) {
    switch(action.type) {
        case 'START_FILLING_FORM':
            return Object.assign({}, state, { openForm: true });
        case 'FINISH_FILLING_FORM':
            return Object.assign({}, state, { openForm: false});
        case 'UPDATE_TASK_DESCRIPTION':
            return Object.assign({}, state, { description: action.data.description });
        case 'SERVICE_TYPE_SELECTED':
            return Object.assign({}, state, { serviceType: action.data.serviceType})
    }
    return state;
};

// The Widget Reducer
const mapReducer = function(state = initialMapState, action) {
    switch(action.type) {
        case 'LOCATION_SELECTED':
            return Object.assign({}, state, { locationSelected: true });
    }
    return state;
};

// Combine Reducers
const reducers = combineReducers({
    taskState: taskReducer,
    mapState: mapReducer
});

const store = createStore(reducers);
export default store;