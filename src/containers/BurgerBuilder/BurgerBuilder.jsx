import React, { useState } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const BurgerBurger = () => {
  const BUILDER_BURGER_STATE = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.4
  };

  
  const [purchasableState, setPurchasable] = useState(false);
  const [ingredientsState, setIngredientsState] = useState(
    BUILDER_BURGER_STATE.ingredients
  );
  const [priceState, stePriceState] = useState(0);

  const [purshasingState, setPurshasing] = useState(false)

  const updatePurshaseState = inredients => {
    const sum = Object.keys(inredients)
      .map(igKey => {
        return inredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    setPurchasable(sum > 0);
  };
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
    updatePurshaseState(updatedIng);
  };

  const removeIngredientHandler = type => {
    const oldCount = ingredientsState[type];
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
    updatePurshaseState(updatedIng);
  };

  const disabledInfo = {
    ...ingredientsState
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  const purshaseHandler = () => {
    setPurshasing(true)
  }

  const purshaseCancelHandler = ( ) => {
    setPurshasing(false)
  }
  return (
    <div>
      <Modal show={purshasingState} modalClosed={purshaseCancelHandler}>
        <OrderSummary ingredients={ingredientsState}/>
      </Modal>
      <Burger ingredients={ingredientsState} />
      <BuildControls
        price={priceState}
        ingRemove={removeIngredientHandler}
        ingAdded={addIngredientHandler}
        disabled={disabledInfo}
        purchasable={purchasableState}
        price={priceState}
        ordered={purshaseHandler}
      />
    </div>
  );
};

export default BurgerBurger;
