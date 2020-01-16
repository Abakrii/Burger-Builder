import React from "react";
import styles from "./BuildControl.module.css";
import classes from "./BuildControl.module.css";
const BuildControl = ({ label, added, remove, disabled }) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{label}</div>
    <button className={classes.Less} onClick={remove} disabled={disabled}>
      Less
    </button>
    <button className={classes.More} onClick={added}>
      More
    </button>
  </div>
);

export default BuildControl;
