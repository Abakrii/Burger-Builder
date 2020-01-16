import React, { useState } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
const BurgerBurger = () => {
  const INGREDIENTS_STATE = {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  };
  const [ingredientsState, setIngredientsState] = useState(INGREDIENTS_STATE);
  return (
    <div>
      <Burger ingredients={ingredientsState} />
      <BuildControls />
    </div>
  );
};

export default BurgerBurger;
