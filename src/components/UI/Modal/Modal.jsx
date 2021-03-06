import React from "react";
import style from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
const Modal = props => (
  <div>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
      className={style.Modal}
    >
      {props.children}
    </div>
    
  </div>
);

export default Modal;
