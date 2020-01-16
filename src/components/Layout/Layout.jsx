import React from "react";

import style from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <div>Toolbar, SideDrawe, BackDrop</div>
      <main className={style.Content}>{children}</main>
    </div>
  );
};

export default Layout;
