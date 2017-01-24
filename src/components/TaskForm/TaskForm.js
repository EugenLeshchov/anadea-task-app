import * as React from 'react';
import { connect } from 'react-redux';

import { Description, Services, ServiceTasks, Product, Location, Date } from './'

import store from '../../store';

import services from './services'


export class TaskForm extends React.Component {
    constructor(props) {
        super(props);

        this.createTask = this.createTask.bind(this);
    }

    createTask() {
        if (this.props.selectedTask && this.props.newTask.location && this.props.newTask.description) {
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

    handleDatePick() {
        store.dispatch({
            type: 'DATE_PICKED',
        })
    }

    handleDateUpdate(dateString, { dateMoment, timestamp }){
    store.dispatch({
        type: 'DATE_UPDATE',
        date: timestamp
    })
}

    render() {
        const styles = {
            inputForm: {
                height: '100%',
                width: '30em',
                right: (this.props.openForm ? '0' : '-30em'),
                top: '0',
                position: 'absolute',
                margin: '0 0 0 0',
                zIndex: '2',
                backgroundColor: 'white',
                transition: 'all 1s ease',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }
        };
        return (
            <form className='z-depth-4 ' style={styles.inputForm}>
                <Product createTask={this.createTask}
                         newTaskData={this.props.newTask} />
                <Location handleLocationChange={this.handleLocationChange}
                          location={this.props.location}/>
                <Services services={services}
                          selectedServiceId={this.props.service.id} />
                <ServiceTasks service={this.props.service}
                              selectedServiceTask={this.props.selectedTask}
                              serviceSelected={(this.props.service.id != null)} />
                <Description handleDescriptionChange={this.handleDescriptionChange}
                             description={this.props.description}/>
                <Date pick={this.props.pickDate}
                      handleDatePick={this.handleDatePick}
                      handleDateUpdate={this.handleDateUpdate}
                      date={this.props.date}/>
            </form>
        );
    }
}


const mapStateToProps = function(store) {
    return {
        openForm: store.inputState.openForm,
        service: store.inputState.service,
        selectedTask: store.inputState.selectedTask,
        newTask: store.inputState,
        pickDate: store.inputState.pickDate,
        location: store.inputState.location,
        description: store.inputState.description,
        date: store.inputState.date,
    }
};

export default connect(mapStateToProps)(TaskForm);