import * as React from 'react';

function Label(props) {
    const styles = {
        marginBottom: '1em',
        display: 'inline-block'
    };

    return (
        <label style={styles}>{props.text}</label>
    )
}

export { Label };