import React, { useState, useEffect } from 'react';
import CartElement from './CartElement';

function Cart(props) {
  const [visibility, setVisibility] = useState(props.visibility);
  const [cartContent, setCartContent] = useState([]);
  const [count, setCount] = useState(0);

  const removeElement = (itemKey) => {
    let newArray = [...cartContent];
    newArray.splice(itemKey, 1);
    setCartContent(newArray);
    console.log(cartContent);
  };

  useEffect(() => {
    setVisibility(props.visibility);
  }, [props.visibility]);

  useEffect(() => {
    if (count > 0) {
      setCartContent((prevArray) => [...prevArray, props.cartContent]);
    }
    setCount(count + 1);
  }, [props.cartContent]);

  return (
    <div className={visibility + ' cart'}>
      <h1>This is the cart</h1>
      <div>
        {Object.keys(cartContent).map((i) => (
          <CartElement
            key={cartContent[i].id}
            player={cartContent[i]}
            removeCartElement={removeElement}
            productId={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
