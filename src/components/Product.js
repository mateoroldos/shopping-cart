function Product(props) {
  const imageFile = 'player-images/' + props.player.imageName + '.jpeg';

  return (
    <div className="product">
      <img className="product-image" src={imageFile} alt={props.player} />
      <h3>
        {props.player.name}
        {props.player.surname}
      </h3>
      <div>{props.player.position}</div>
      <div>{props.player.price}</div>
      <button>Add To Cart</button>
    </div>
  );
}

export default Product;
