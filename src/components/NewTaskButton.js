import * as React from 'react';
import { connect } from 'react-redux';
import store from '../store';

class NewTaskButton extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            width: '100%'
        }
    }

    hundleClick() {
        store.dispatch({
            type: 'CREATE_NEW_TASK',
        })
    }

    render() {
        const className = ((this.props.enabled === true) ? 'enabled' : 'disabled')
                        + ' waves-effect waves-light btn new-task-button'
                        + ' white blue-text text-accent-3';
        return (
            <a  className={className}
                onClick={this.hundleClick}
                style={this.styles}
            >
                + NEW TASK
            </a>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        enabled: store.taskState.enabled
    };
};

export default connect(mapStateToProps)(NewTaskButton);