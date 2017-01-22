import * as React from 'react';
import { Task } from '../';

class List extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="task-list">
                { this.props.tasks.map(task => <Task key={task.id} data={ task }/>) }
            </div>
        );
    }
}

export default List;