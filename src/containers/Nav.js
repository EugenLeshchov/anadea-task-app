import * as React from 'react';

export function Nav(props) {

    const styles = {
        nav: {
            width: '100%',
            height: '6%'
        },
        logo: {
            left: '1.3em',
            color: '#ef5350',
            fontSize: '1.5em',
            fontWeight: 'bold'
        }
    };

    return (
        <nav style={styles.nav} className="white">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo" style={styles.logo}>{props.logo}</a>
            </div>
        </nav>
    );
}