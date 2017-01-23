import * as React from 'react';

import { store } from '../..';

function Service(props) {
    const styles = {
        image: {
            height: '3.3em',
            width: '3.3em'
        },
        serviceType: {
            fontSize: '0.75em',
            textAlign: 'center',
            marginTop: '.4em'
        },
        service: {
            width: '5em',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
        },
        circle: {
            height: '4.6em',
            width: '4.6em',
            position: 'relative',
            top: '0',

            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
        }

    };

    function handleServiceTypeSelection() {
        store.dispatch({
            type: 'SERVICE_TYPE_SELECTED',
            data: {
                service: props.service,
            }
        })
    }

    const className = (props.selectedServiceType == props.service.id ? 'selected' : 'unselected');

    return (
        <div style={styles.service}>
            <div style={styles.circle}
                 className={'circle ' + className}>
                <img src={props.service.imageSource}
                     style={styles.image}
                     onClick={handleServiceTypeSelection}/>
            </div>
            <div style={styles.serviceType}>
                {props.service.serviceType}
            </div>
        </div>
    );
}

export { Service };