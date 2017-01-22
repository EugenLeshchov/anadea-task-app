import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

// components and containers
import { Tasks, TaskForm, Nav, Main } from './containers';
import { Map } from './components';

// DataBase
import tasks from './tasksdb';

render(
    <Provider store={store}>
        <div>
            <Nav logo="jobUp"/>
            <Main>
                <Map />
                <Tasks tasks={tasks}/>
                <TaskForm />
            </Main>
        </div>
    </Provider>,
    document.getElementById('root')
);