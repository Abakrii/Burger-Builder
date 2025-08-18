import React, { useState, useReducer } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.4
};

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 0,
  purchasable: false,
  purchasing: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        purchasable: true
      };
    case 'REMOVE_INGREDIENT':
      const newTotalPrice = state.totalPrice - INGREDIENT_PRICES[action.ingredientName];
      const newIngredients = {
        ...state.ingredients,
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
      };
      const sum = Object.values(newIngredients).reduce((sum, el) => sum + el, 0);
      return {
        ...state,
        ingredients: newIngredients,
        totalPrice: newTotalPrice,
        purchasable: sum > 0
      };
    case 'PURCHASE':
      return { ...state, purchasing: true };
    case 'PURCHASE_CANCEL':
      return { ...state, purchasing: false };
    case 'PURCHASE_CONTINUE':
      alert('You Continue');
      return { ...state, purchasing: false };
    default:
      return state;
  }
};

const BurgerBuilder = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addIngredientHandler = type => {
    dispatch({ type: 'ADD_INGREDIENT', ingredientName: type });
  };

  const removeIngredientHandler = type => {
    dispatch({ type: 'REMOVE_INGREDIENT', ingredientName: type });
  };

  const purchaseHandler = () => {
    dispatch({ type: 'PURCHASE' });
  }

  const purchaseCancelHandler = () => {
    dispatch({ type: 'PURCHASE_CANCEL' });
  }

  const purchaseContinueHandler = () => {
    dispatch({ type: 'PURCHASE_CONTINUE' });
  }

  const disabledInfo = {
    ...state.ingredients
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  return (
    <div>
      <Modal show={state.purchasing} modalClosed={purchaseCancelHandler}>
        <OrderSummary
          ingredients={state.ingredients}
          purchaseCancelled={purchaseCancelHandler}
          purchaseContinue={purchaseContinueHandler}
          price={state.totalPrice}
        />
      </Modal>
      <Burger ingredients={state.ingredients} />
      <BuildControls
        price={state.totalPrice}
        ingRemove={removeIngredientHandler}
        ingAdded={addIngredientHandler}
        disabled={disabledInfo}
        purchasable={state.purchasable}
        ordered={purchaseHandler}
      />
    </div>
  );
};

export default BurgerBuilder;
