import * as React from 'react';
import { DateField, DatePicker } from 'react-date-picker'
import 'react-date-picker/index.css'

function Date(props){
    const styles = {
        picker: {
            position: 'fixed',
            padding: '2em',
            top: '30%',
            left: '50%',
            width:'20em',
            height:'15em',
            marginTop: '-6em',
            marginLeft: '-10em',
            overflow: 'hidden'
        },
        title: {
            fontSize: '1.5em',

        },
        input: {
            border: '0 0 0 0',
        },
        button: {
            display: 'block',
            position: 'relative',
            marginTop: '1.8em',
            marginLeft: '7em',
            backgroundColor: '#4C71FE'
        }
    };

    return (
        <div className='card date' style={styles.picker}>
            <div style={styles.title}>Please pick the <b>date</b></div><br />
            <DateField
                dateFormat="YYYY-MM-DD HH:mm:ss"
                forceValidDate={true}
                updateOnDateClick={true}
                defaultValue={1485281169296}
            >
                <DatePicker
                    navigation={true}
                    locale="en"
                    forceValidDate={true}
                    highlightWeekends={true}
                    highlightToday={true}
                    weekNumbers={true}
                    weekStartDay={0}
                />
            </DateField>
            <a className="waves-effect waves-light btn"
               style={styles.button}>
                Accept
            </a>
        </div>
    );
}

export default Date;