import React, { useState } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
const BurgerBurger = () => {
  const BUILDER_BURGER_STATE = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };

  const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0
  };

  const [ingredientsState, setIngredientsState] = useState(
    BUILDER_BURGER_STATE.ingredients
  );
  const [priceState, stePriceState] = useState(BUILDER_BURGER_STATE.totalPrice);
  
  const addIngredientHandler = type => {
    const oldCount = ingredientsState[type];
    const updatedCount = oldCount + 1;
    const updatedIng = {
      ...ingredientsState
    };
    updatedIng[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = priceState;
    const newPrice = oldPrice + priceAddition;
    stePriceState(newPrice);
    setIngredientsState(updatedIng);
  };

  const removeIngredientHandler = type => {
    const oldCount = ingredientsState[type];
    if(oldCount<=0) return;
    const updatedCount = oldCount - 1;
    const updatedIng = {
      ...ingredientsState
    };
    updatedIng[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = priceState;
    const newPrice = oldPrice - priceAddition;
    stePriceState(newPrice);
    setIngredientsState(updatedIng);
  };

  const disabledInfo = {
    ...ingredientsState
  }

  for(let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }

  return (
    <div>
      <Burger ingredients={ingredientsState} />
      <BuildControls ingRemove={removeIngredientHandler} ingAdded={addIngredientHandler} disabled={disabledInfo}/>
    </div>
  );
};

export default BurgerBurger;
