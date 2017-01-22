import * as React from 'react';

export class TaskForm extends React.Component {
    constructor(props) {
        super(props);

        this.styles = {
            height: '100%',
            width: '10em',
            right: '0',
            top: '0',
            position: 'absolute',
            margin: '0 0 0 0'
        };
    }

    render() {
        return (
            <form style={this.styles}>
                <input type="text" />
            </form>
        );
    }
}