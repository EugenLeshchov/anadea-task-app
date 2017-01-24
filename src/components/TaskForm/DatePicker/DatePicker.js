import * as React from 'react';
import { DateField, DatePicker } from 'react-date-picker'
import 'react-date-picker/index.css'

function Date(props){
    const styles = {
        wrapper: {
            zIndex: '3',
            position: 'fixed',
            left: '0',
            width: '1000%',
            height: '1000%',
            backgroundColor: 'rgb(0,0,0)',
            backgroundColor: 'rgba(0,0,0,0.4)',
            transition: 'background-color 1s'
        },
        picker: {
            position: 'fixed',
            padding: '2em',
            left: '50%',
            width:'20em',
            height:'15em',
            marginTop: '-6em',
            marginLeft: '-10em',
            transition: 'all .5s cubic-bezier(.17,.67,.35,1.22)',
            zIndex: '4'
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
            backgroundColor: '#4C71FE',
        }
    };

    return (
        <div style={(props.pick ? styles.wrapper : {})}>
            <div className='card date' style={Object.assign({}, styles.picker, (props.pick ? {top: '30%'} : {top: '120%'}))}>
                <div style={styles.title}>Please pick the <b>date</b></div><br />
                <DateField
                    dateFormat="YYYY-MM-DD HH:mm:ss"
                    forceValidDate={true}
                    updateOnDateClick={true}
                    defaultValue={1485281169296}
                >
                    <DatePicker
                        onChange={props.handleDateUpdate}
                        navigation={true}
                        locale="en"
                        forceValidDate={true}
                        highlightWeekends={true}
                        highlightToday={true}
                        weekNumbers={true}
                        weekStartDay={0}
                    />
                </DateField>
                <a  onClick={props.handleDatePick}
                    className="waves-effect waves-light btn"
                    style={styles.button}>
                    Accept
                </a>
            </div>
        </div>
    );
}

export default Date;