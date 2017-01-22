import * as React from 'react';

export class Map extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            map: {
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: '-1'
            }
        }
    }

    render() {
        return (
            <div>
                <img style={this.styles.map} src={"../map.jpg"} />
            </div>
        );
    }
}