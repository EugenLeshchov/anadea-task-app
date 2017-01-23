import * as React from 'react';

import { Label } from '../';

export function Description(props) {
     return (
        <div className="wrapper">
            <Label text={'TASK DESCRIPTION'} />
            <div className="input-field">
                <textarea spellCheck="false" id="description"
                          className="materialize-textarea"
                          onKeyUp={props.handleDescriptionChange}>
                </textarea>
            </div>
        </div>
    );
}