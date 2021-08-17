import React, { useState, useEffect } from 'react';
import CartElement from './CartElement';

function Cart(props) {
  const [visibility, setVisibility] = useState(props.visibility);
  const [cartContent, setCartContent] = useState(props.cartContent);

  const cartContentElements = Object.keys(cartContent).map((key) => (
    <CartElement key={key} player={cartContent[key]} />
  ));

  useEffect(() => {
    setVisibility(props.visibility);
  }, [props.visibility]);

  useEffect(() => {
    setCartContent(props.cartContent);
  }, [props.cartContent]);

  return (
    <div className={visibility + ' cart'}>
      <h1>This is the cart</h1>
      <div>{cartContentElements}</div>
    </div>
  );
}

export default Cart;
