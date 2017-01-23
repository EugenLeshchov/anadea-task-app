import * as React from 'react';
import { connect } from 'react-redux';

import { Description, Services, ServiceTasks, Product, Location } from './'

import store from '../../store';

import services from './services'


export class TaskForm extends React.Component {
    constructor(props) {
        super(props);

        this.styles = {
            height: '100%',
            width: '30em',
            right: '-30em',
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

    createTask() {
        if (this.props.selectedTask && this.props.location && this.props.description) {
            store.dispatch({
                type: 'FINISH_FILLING_FORM'

            })
        } else {
            store.dispatch({
                type: 'INCORRECT_INPUT'
            })
        }
    }

    handleLocationChange(event) {
        store.dispatch({
            type: 'UPDATE_TASK_LOCATION',
            data: {
                location: event.target.value
            }
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

    handleServiceTypeSelection(serviceType) {
        store.dispatch({
            type: 'SERVICE_TYPE_SELECTED',
            data: {
                serviceType: serviceType
            }
        })
    }

    render() {
        const additionalStyles = (this.props.openForm ? { right: '0'} : { right: '-30em'});
        const completeStyles = Object.assign({}, this.styles, additionalStyles);

        return (
            <form className='z-depth-4 ' style={completeStyles}>
                <Product createTask={this.createTask} newTaskData={this.props.newTask} handleCreateTask={this.closeForm}/>
                <Location handleLocationChange={this.handleLocationChange}/>
                <Services services={services}
                          selectedServiceType={this.props.service.id}/>
                <ServiceTasks service={this.props.service}
                              selectedServiceTask={this.props.selectedTask}
                              serviceSelected={(this.props.service.id != null)}/>
                <Description handleDescriptionChange={this.handleDescriptionChange}/>
            </form>
        );
    }
}


const mapStateToProps = function(store) {
    return {
        openForm: store.taskState.openForm,
        service: store.taskState.service,
        selectedTask: store.taskState.selectedTask,
        newTask: store.taskState,
    }
};

export default connect(mapStateToProps)(TaskForm);