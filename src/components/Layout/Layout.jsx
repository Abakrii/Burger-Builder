import React from "react";

import style from "./Layout.module.css";
import Toolbar from '../Navigation/Toolbar/Toolbar';
const Layout = ({ children }) => {
  return (
    <div>
      <Toolbar/>
      <div>Toolbar, SideDrawe, BackDrop</div>
      <main className={style.Content}>{children}</main>
    </div>
  );
};

export default Layout;
