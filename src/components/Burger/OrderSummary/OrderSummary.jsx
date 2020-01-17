import React from "react";

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
    </div>
  );
};

export default OrderSummary;
