import * as React from 'react'

function CreateButton(props) {
    const styles = {
        button: {
            backgroundColor: '#4C71FE'
        }
    };

    return (
        <a onClick={props.createTask}
           className="waves-effect waves-light btn"
           style={styles.button}>
            CREATE TASK
        </a>
    );
}

export default CreateButton;