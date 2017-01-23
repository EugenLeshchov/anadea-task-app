import * as React from 'react'

function DatePicker(props) {
    const styles = {
        display: 'hidden'
    };

    return (
        <input style={styles} className="datepicker" type="date"/>
    );
}

export default DatePicker;