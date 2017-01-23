import * as React from 'react';

function Button(props) {
    const styles = {
        width: '100%',
        marginBottom: '.3em'
    };

    return (
        <a className="waves-effect btn white blue-text text-accent-3"
           style={styles}
           onClick={props.onClick}>
           + NEW TASK
        </a>
    );
}

export { Button };