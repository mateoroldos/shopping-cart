function Product(props) {
  const imageFile = 'player-images/' + props.player.imageName + '.jpeg';

  const addToCartInProduct = (productId) => () => {
    props.addToCartProduct(productId);
  };

  return (
    <div className="product">
      <img className="product-image" src={imageFile} alt={props.player} />
      <h3>
        {props.player.name}
        {props.player.surname}
      </h3>
      <div>{props.player.position}</div>
      <div>{props.player.price}</div>
      <button onClick={addToCartInProduct(props.player.id)}>Add To Cart</button>
    </div>
  );
}

export default Product;
