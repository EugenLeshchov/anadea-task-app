import * as React from 'react';

function Button(props) {
    const styles = {
        width: '100%'
    };

    const className = (props.enabled ? 'enabled ' : 'disabled ') + "waves-effect btn white blue-text text-accent-3";

    return (
        <a className={className}
           style={styles}
           onClick={props.onClick}>
           + NEW TASK
        </a>
    );
}

export { Button };