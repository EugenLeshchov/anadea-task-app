import * as React from 'react';

import { CreateButton } from './';

import { Label } from '../';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            description: {
                marginBottom: '.5em',
                fontSize: '1.5em'
            },
            location: {
                marginBottom: '.5em',
                color: '#bdbdbd'
            }
        }
    }

    getServiceType() {
        return (this.props.newTaskData.service.serviceType != null
                ? <span>
                    <b>{'a ' + this.props.newTaskData.service.serviceType.toLowerCase()}</b>
                    <span>{' to '}</span>
                  </span>
                : <b>{'... '}</b>)
    }

    getServiceTask() {
        return (this.props.newTaskData.selectedTask
                 ? <b>{this.props.newTaskData.selectedTask.toLowerCase()}</b>
                 : <b>{''}</b>)
    }

    getTaskDescription() {
        return (this.props.newTaskData.description
                 ? <b>{', ' + this.props.newTaskData.description + '.'}</b>
                 : '')
    }


    render() {
        return (
            <div className="wrapper slide">
                <Label text={'NEW TASK'} />
                <div style={this.styles.description}>
                    {'I need '}
                    {this.getServiceType()}
                    {this.getServiceTask()}
                    {this.getTaskDescription()}
                </div>
                <div style={this.styles.location}>{this.props.newTaskData.location}</div>
                <CreateButton createTask={this.props.createTask}/>
            </div>
        );
    }
}

export default Product;