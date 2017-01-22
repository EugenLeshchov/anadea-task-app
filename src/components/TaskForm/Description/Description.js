import * as React from 'react';

export function Description(props) {
    const styles = {
        wrapper: {
            position: 'relative',
            width: '80%'
        },
    };

    return (
        <div style={styles.wrapper}
             className="input-field">
            <label htmlFor="description">TASK DESCRIPTION</label>
            <textarea id="description"
                      className="materialize-textarea"
                      onKeyUp={props.handleDescriptionChange}>
            </textarea>
        </div>
    );
}