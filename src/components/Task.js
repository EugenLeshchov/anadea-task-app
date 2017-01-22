import * as React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            width: '100%',
            marginTop: '.6em',
            marginBottom: '.6em'
        }
    }

    render() {
        const className = 'task card';
        return (
            <div className={className}
                 style={this.styles}>
                <div>{this.props.data.date}</div>
                <div>{this.props.data.description}</div>
            </div>
        );
    }
}

export default Task;