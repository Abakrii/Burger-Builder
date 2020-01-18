import React from 'react';
import style from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";
const Toolbar = () => (
    <header className={style.Toolbar}>
        <div >
            Menu            
        </div>
       
        <Logo />
       
     
        <nav>
            <NavigationItems/>
        </nav>
    </header>
)

export default Toolbar;