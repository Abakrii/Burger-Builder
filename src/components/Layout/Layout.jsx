import React,{useState} from "react";

import style from "./Layout.module.css";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SildeDrawer/SideDrawer'
const Layout = ({ children }) => {
  
   const  [sideDrawerState, setSideDrawerState] = useState(true);

   const purshaseCancelHandler = ( ) => {
    setSideDrawerState(false)
  }
   return (
    <div>
      <Toolbar/>
      <SideDrawer open={sideDrawerState} closed={purshaseCancelHandler}/>
      <div>Toolbar, SideDrawe, BackDrop</div>
      <main className={style.Content}>{children}</main>
    </div>
  );
};

export default Layout;
 