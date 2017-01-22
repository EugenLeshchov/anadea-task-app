import * as React from 'react';

import store from '../../store';

export class Map extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            map: {
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: '1'
            }
        }
    }

    hundleClick() {
        store.dispatch({
            type: 'LOCATION_SELECTED',
        })
    }

    render() {
        return (
            <div onClick={this.hundleClick} id="map">
                <img onClick={this.hundleClick} style={this.styles.map} src={"../map.jpg"} />
            </div>
        );
    }
}