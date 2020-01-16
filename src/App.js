import React from 'react';

import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBurger from './containers/BurgerBuilder/BurgerBuilder';
function App() {
  return (
    <div className="App">
      <Layout>
      <BurgerBurger/>
      </Layout>
    </div>
  );
}

export default App;
