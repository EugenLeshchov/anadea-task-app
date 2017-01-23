import * as React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            date: {
                fontSize: '1em',
                color: '#9e9e9e'
            },
            description: {

            }
        }
    }

    render() {
        return (
            <div className='task card'>
                <div style={this.styles.date}>{this.props.data.date}</div>
                <div style={this.styles.description}>{this.props.data.description}</div>
            </div>
        );
    }
}

export default Task;