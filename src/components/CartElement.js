function CartElement(props) {
  const imageFile = 'player-images/' + props.player.imageName + '.jpeg';

  return (
    <div className="cart-element">
      <img className="cart-element-image" src={imageFile} alt={props.player} />
      <h3>
        {props.player.name}
        {props.player.surname}
      </h3>
      <div>{props.player.position}</div>
      <div>{props.player.price}</div>
    </div>
  );
}

export default CartElement;
