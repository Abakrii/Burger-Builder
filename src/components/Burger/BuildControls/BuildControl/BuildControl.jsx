import React from 'react';
import styles from './BuildControl.module.css';
import classes from './BuildControl.module.css';
const BuildControl = ({label, added, key}) =>(
    <div className={styles.BuildControl}>
        <div className={styles.Label}>
            {label}
        </div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More} onClick={added}>More</button>
    </div>
)



export default BuildControl;
