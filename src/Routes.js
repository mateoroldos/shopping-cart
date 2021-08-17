import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Store from './components/Store';
import Nav from './components/Nav';
import Cart from './components/Cart';

function Routes() {
  const [cartVisibility, setCartVisibility] = useState('hidden');
  const displayCart = () => {
    if (cartVisibility === 'hidden') {
      setCartVisibility('display');
    } else if (cartVisibility === 'display') {
      setCartVisibility('hidden');
    }
  };

  return (
    <BrowserRouter>
      <Nav displayCart={displayCart}></Nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/store" component={Store} />
      </Switch>
      <Cart visibility={cartVisibility}></Cart>
    </BrowserRouter>
  );
}

export default Routes;
