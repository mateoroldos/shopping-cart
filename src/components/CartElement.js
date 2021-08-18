import React, { useState, useEffect } from 'react';

function CartElement(props) {
  const [quantity, setQuantity] = useState(1);

  const addItem = () => {
    setQuantity(quantity + 1);
  };

  const removeItem = () => {
    setQuantity(quantity - 1);
  };

  const removeFromCart = () => {
    props.removeCartElement(props.productId);
  };

  useEffect(() => {
    if (quantity === 0) {
      removeFromCart();
    }
  }, [quantity]);

  const imageFile = 'player-images/' + props.player.imageName + '.jpeg';

  return (
    <div className="cart-element">
      <img className="cart-element-image" src={imageFile} alt={props.player} />
      <h3>
        {props.player.name}
        {props.player.surname}
      </h3>
      <div>Number of items: {quantity}</div>
      <div>{props.player.position}</div>
      <div>{props.player.price}</div>
      <button onClick={addItem}>Add item</button>
      <button onClick={removeItem}>Remove item</button>
    </div>
  );
}

export default CartElement;
