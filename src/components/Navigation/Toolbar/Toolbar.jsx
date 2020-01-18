import React from "react";
import style from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SildeDrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => (
  <header className={style.Toolbar}>
    <DrawerToggle clicked={props.toggleClicked} />

    <Logo />

    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
