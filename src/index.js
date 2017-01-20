import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Tasks from './containers';

import tasks from './tasksdb';

render(
    <Provider store={store}>
        <div>
            <Nav />
            <Main>
                <Tasks tasks={tasks}/>
                <TaskForm />
            </Main>
        </div>
    </Provider>,
    document.getElementById('root')
);