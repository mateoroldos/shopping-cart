import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Store from './components/Store';
import Nav from './components/Nav';
import Cart from './components/Cart';
import productsData from './data/productsData';

function Routes() {
  const [cartVisibility, setCartVisibility] = useState('hidden');
  const [cartContent, setCartContent] = useState();
  const [counter, setCounter] = useState(0);

  const displayCart = () => {
    if (cartVisibility === 'hidden') {
      setCartVisibility('display');
    } else if (cartVisibility === 'display') {
      setCartVisibility('hidden');
    }
  };

  const addToCartArray = (producId) => {
    setCartContent(productsData.productsArray[producId]);
    setCounter(counter + 1);
  };

  return (
    <BrowserRouter>
      <Nav displayCart={displayCart}></Nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/store" render={() => <Store addToCartStore={addToCartArray} />} />
      </Switch>
      <Cart visibility={cartVisibility} cartContent={cartContent} counter={counter}></Cart>
    </BrowserRouter>
  );
}

export default Routes;
