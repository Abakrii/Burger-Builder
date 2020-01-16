import React from 'react';
import Aux from '../../hoc';

const Layout = ({children}) => {
    return (
   
        <div>
        <div>Toolbar, SideDrawe, BackDrop</div>
        <main>
            {children}
        </main>
   
   </div>
    )

}


export default Layout;