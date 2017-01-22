import * as React from 'react';

import { List, Button } from './';

export class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            position: 'absolute',
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
                <Button />
                <List tasks={this.props.tasks} />
            </div>
        );
    }
}