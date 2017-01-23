import * as React from 'react';

import { Label } from '../';

function Location(props) {
    return (
        <div className="wrapper">
            <Label text={'LOCATION'}/>
            <input spellCheck="false" onKeyUp={props.handleLocationChange} type="text" />
        </div>
    )
}

export default Location;