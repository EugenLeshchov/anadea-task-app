import * as React from 'react';

import { Label } from '../';

export function Description(props) {
     return (
        <div className="wrapper">
            <Label text={'TASK DESCRIPTION'} />
            <div className="input-field">
                <textarea spellCheck="false"
                          id="description"
                          className="materialize-textarea"
                          onInput={props.handleDescriptionChange}
                          value={props.description}>
                </textarea>
            </div>
        </div>
    );
}