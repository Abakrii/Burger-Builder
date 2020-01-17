import React from "react";
import style from "./Backdrop.module.css";
const BackDrop = props =>
  props.show ? <div className={style.Backdrop} onClick={props.clicked}></div> : null;

export default BackDrop;
