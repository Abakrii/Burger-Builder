import React from "react";
import style from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const NavigationItems = props => (
  <ul className={style.NavigationItems}> 
   <NavigationItem link="/">
        Burger Builder
   </NavigationItem>
   <NavigationItem link="/">
       Checkoit
   </NavigationItem>
  </ul>
);

export default NavigationItems;
