import React,{useState} from "react";
import Burger from "../../components/Burger/Burger";
const BurgerBurger = () => {
  const INGREDIENTS_STATE = {
    salad: 1,
    bacon: 1,
    cheese: 2,
    meat: 2
  };
  const [ingredientsState, setIngredientsState] = useState(INGREDIENTS_STATE);
  return (
    <div>
      <Burger ingredients={ingredientsState}/>
      <div>Build Controls</div>
    </div>
  );
};

export default BurgerBurger;
