import * as React from 'react';

import { Service } from './'
import { Label } from '../'

function Services(props) {
    const styles = {
        services: {
            position: 'relative',
            width: '100%',

            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        wrapper: {
            width: '90%',
            borderColor: '#e0e0e0 0 #e0e0e0',
            border: '3px 0 3px 0',
        },

    };

    return (
        <div className="wrapper">
            <Label text={'SERVICE TYPE'} />
            <div style={styles.services}>
                {props.services.map(function(service) {
                    return <Service key={service.id}
                                    service={service}
                                    selectedServiceType={props.selectedServiceType}
                                    handleServiceTypeSelection={props.handleServiceTypeSelection}/>;
                })}
            </div>
        </div>
    );
}

export { Services };