import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import style from './Burger.module.css';
const Burger = ({ingredients}) =>{

    const transformedIngredients = Object.keys(ingredients).map(igKey=>{
        return[...Array(ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey +1} type={igKey}/>
        }) 
    })
    return(
        <div className={style.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
 
            

        </div>
    )
}

export default Burger;