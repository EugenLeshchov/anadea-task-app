import * as React from 'react';

import { Label } from '../';

export function Description(props) {
    const styles = {
        wrapper: {
            position: 'relative',
            width: '90%',
            margin: '1.5em 0'
        },
        label: {
            display: 'inline-block',
        }
    };

    return (
        <div className="wrapper">
            <Label text={'TASK DESCRIPTION'} />
            <div className="input-field">
                <textarea id="description"
                          className="materialize-textarea"
                          onKeyUp={props.handleDescriptionChange}>
                </textarea>
            </div>
        </div>
    );
}