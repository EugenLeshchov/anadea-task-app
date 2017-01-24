import { createStore, combineReducers } from 'redux';

const initialTasksState = {

};

const initialInputState = {
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
    pickDate: false,
};

const initialMapState = {
    locationSelected: false
};

// The User Reducer
const inputReducer = function(state = initialInputState, action) {
    switch(action.type) {
        // Form filling status
        case 'START_FILLING_FORM':
            return Object.assign({}, state, initialInputState, { openForm: true });
        case 'FINISH_FILLING_FORM':
            return Object.assign({}, state, { openForm: false, error: false, pickDate: true});

        // Date picker status
        case 'DATE_PICKED':
            return Object.assign({}, state, { pickDate: false });
        case 'DATE_UPDATE':
            return Object.assign({}, state, { date: date });

        // Updating status
        case 'UPDATE_TASK_DESCRIPTION':
            return Object.assign({}, state, { description: action.data.description });
        case 'UPDATE_TASK_LOCATION':
            return Object.assign({}, state, { location: action.data.location });

        // Services selection status
        case 'SERVICE_TYPE_SELECTED':
            return Object.assign({}, state, { service: action.data.service, selectedTask: null});
        case 'SERVICE_TASK_SELECTED':
            return Object.assign({}, state, { selectedTask: action.data.selectedTask });

        // Input correctness
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

const tasksReducer = function(state = initialTasksState, action) {
    switch(action.type) {
        case 'LOCATION_SELECTED':
            return Object.assign({}, state, { locationSelected: true });
    }
    return state;
};

// Combine Reducers
const reducers = combineReducers({
    inputState: inputReducer,
    tasksState: tasksReducer,
    mapState: mapReducer
});

const store = createStore(reducers);
export default store;