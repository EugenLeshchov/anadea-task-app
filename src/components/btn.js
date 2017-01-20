import * as React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.styles = {
            button: {
                position: 'relative',
                left: '100px',
                top: '100px'
            }
        };
    }

    render() {
        let classes = 'waves-effect waves-light btn white blue-text text-accent-3';
        return <a className={classes} style={this.styles.button}>+ NEW TASK</a>
    }
}

export default Button;