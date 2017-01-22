import * as React from 'react';

export function Nav(props) {

    const styles = {
        nav: {
            width: '100%',
            height: '6%',
            display: 'flex',
            alignItems: 'center',
        },
        logo: {
            color: '#ef5350',
            fontSize: '1.5em',
            fontWeight: 'bold',
            position: 'relative',
            left: '1.3em'
        }
    };

    return (
        <nav style={styles.nav} className="white">
            <div style={styles.logo}>{props.logo}</div>
        </nav>
    );
}