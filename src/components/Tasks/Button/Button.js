import * as React from 'react';

function Button(props) {
    const styles = {
        width: '100%'
    }

    return (
        <a className="waves-effect btn white blue-text text-accent-3"
           style={styles}>
           + NEW TASK
        </a>
    );
}

export default Button;