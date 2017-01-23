import { createStore, combineReducers } from 'redux';

const initialTaskState = {
    openForm: false,
    description: '',
    service: {
        id: null,
        serviceType: null,
        imageSource: null,
        tasks: []
    },
    selectedTask: null,
    location: null,
    error: false,
};

const initialMapState = {
    locationSelected: false
};

// The User Reducer
const taskReducer = function(state = initialTaskState, action) {
    switch(action.type) {
        case 'START_FILLING_FORM':
            return Object.assign({}, state, initialTaskState, { openForm: true });
        case 'FINISH_FILLING_FORM':
            return Object.assign({}, state, { openForm: false, error: false});
        case 'UPDATE_TASK_DESCRIPTION':
            return Object.assign({}, state, { description: action.data.description });
        case 'UPDATE_TASK_LOCATION':
            return Object.assign({}, state, { location: action.data.location });
        case 'SERVICE_TYPE_SELECTED':
            return Object.assign({}, state, { service: action.data.service, selectedTask: null});
        case 'SERVICE_TASK_SELECTED':
            return Object.assign({}, state, { selectedTask: action.data.selectedTask });
        case 'INCORRECT_INPUT':
            return Object.assign({}, state, { error: true });
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