import * as React from 'react';

import { Label } from '../';

import { store } from '../';

function ServiceTasks(props) {

    function handleServiceTaskSelection(serviceTask) {
        return function() {
            store.dispatch({
                type: 'SERVICE_TASK_SELECTED',
                data: {
                    selectedTask: serviceTask
                }
            })
        }
    }

    const styles = {
        task: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }
    };

    if (props.service.id) {
        return (
            <div className="wrapper">
                <Label text={props.service.serviceType.toUpperCase() + ' TASKS'}/>
                <div style={styles.task}>
                    {props.service.tasks.map(function (task) {
                        const className = (props.selectedServiceTask == task
                                           ? 'mark'
                                           : 'unmark');
                        return (
                            <div className={'service-task ' + className}
                                 key={task}
                                 onClick={handleServiceTaskSelection(task)}>
                                 {task}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    } else {
        return null;
    }
}



export default ServiceTasks;