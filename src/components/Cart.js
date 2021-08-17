import React, { useState, useEffect } from 'react';

function Cart(props) {
  const [visibility, setVisibility] = useState(props.visibility);

  useEffect(() => {
    setVisibility(props.visibility);
  }, [props.visibility]);

  return <h1 className={visibility}>This is the cart</h1>;
}

export default Cart;
