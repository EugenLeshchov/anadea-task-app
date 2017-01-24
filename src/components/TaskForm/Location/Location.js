import * as React from 'react';

import { Label } from '../';

function Location(props) {
    return (
        <div className="wrapper">
            <Label text={'LOCATION'}/>
            <input spellCheck="false"
                   onInput={props.handleLocationChange}
                   type="text"
                   value={props.location} />
        </div>
    )
}

export default Location;