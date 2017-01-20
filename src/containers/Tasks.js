import * as React from 'react';

import NewTaskButton from '../components/NewTaskButton';
import TaskList from './TaskList';

export class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: '18em',
            left: '3em',
            top: '1em'
        }
    }

    render() {
        return (
            <div className="task-container"
                 style={this.styles}>
                <NewTaskButton />
                <TaskList tasks={this.props.tasks} />
            </div>
        );
    }
}