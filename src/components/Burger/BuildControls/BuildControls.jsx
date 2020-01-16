import React from "react";
import style from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => (
  <div className={style.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        remove={() => props.ingRemove(ctrl.type)}
        added={() => props.ingAdded(ctrl.type)}
        key={ctrl.label}
        label={ctrl.label}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
  </div>
);

export default BuildControls;
