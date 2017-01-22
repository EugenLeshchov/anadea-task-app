import * as React from 'react';
import { connect } from 'react-redux';

import { Description } from './'

import store from '../../store';

export class TaskForm extends React.Component {
    constructor(props) {
        super(props);

        this.styles = {
            height: '100%',
            width: '28em',
            right: '-28em',
            top: '0',
            position: 'absolute',
            margin: '0 0 0 0',
            zIndex: '2',
            backgroundColor: 'white',
            transition: 'all 1s',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
        };
    }

    closeForm() {
        store.dispatch({
            type: 'FINISH_FILLING_FORM'
        })
    }

    handleDescriptionChange(event) {
        store.dispatch({
            type: 'UPDATE_TASK_DESCRIPTION',
            data: {
                description: event.target.value
            }
        })
    }

    render() {
        const additionalStyles = (this.props.openForm ? { right: '0'} : { right: '-28em'});
        const completeStyles = Object.assign({}, this.styles, additionalStyles);

        return (
            <form className='z-depth-4 ' style={completeStyles}>
                <input onClick={this.closeForm} type="text" />
                <Description handleDescriptionChange={this.handleDescriptionChange}/>
            </form>
        );
    }
}


const mapStateToProps = function(store) {
    return {
        openForm: store.taskState.openForm
    }
};

export default connect(mapStateToProps)(TaskForm);