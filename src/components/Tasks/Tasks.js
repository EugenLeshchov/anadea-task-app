import * as React from 'react';
import { connect } from 'react-redux'

import store from '../../store';

import { List, Button } from './';

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            width: '18em',
            left: '3em',
            top: '1em',
            zIndex: '2'
        }
    }

    createNewTask() {
        store.dispatch({
            type: 'START_FILLING_FORM'
        })
    }

    render() {
        return (
            <div className="task-container"
                 style={this.styles}>
                <Button onClick={this.createNewTask} enabled={this.props.buttonEnabled}/>
                <List tasks={this.props.tasks} />
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        buttonEnabled: store.mapState.locationSelected
    }
};

export default connect(mapStateToProps)(Tasks);