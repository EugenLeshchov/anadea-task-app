import * as React from 'react';
import store from '../store';

export class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick() {
        store.dispatch({
            type: 'CHOOSE_LOCATION',
        })
    }

    render() {
        return (
            <button onClick={this.onClick}>toggle active</button>
        )
    }
}