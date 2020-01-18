import React from "react";

import style from "./Layout.module.css";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SildeDrawer/SideDrawer'
const Layout = ({ children }) => {
  return (
    <div>
      <Toolbar/>
      <SideDrawer/>
      <div>Toolbar, SideDrawe, BackDrop</div>
      <main className={style.Content}>{children}</main>
    </div>
  );
};

export default Layout;
