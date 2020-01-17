import React from "react";
import Button from '../../UI/Button/Button';
const OrderSummary = props => {
  const ingSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <div>
      <h3>Your Order</h3>
      <p>A Delicious Burger with the following ingredients</p>
      <ul>
          {ingSummary}
      </ul>
      <p>Continue to checkout? </p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>Contiune</Button>
      <p>Continue to checkout? </p>
    </div>
  );
};

export default OrderSummary;
