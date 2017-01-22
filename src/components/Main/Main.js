import * as React from 'react';

export function Main(props) {
    const styles = {
        width: '100%',
        height: '94%',
        position: 'relative'
    };

    return (
        <main style={styles}>
            {props.children}
        </main>
    )
}