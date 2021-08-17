import Product from './Product';
import productsData from '../data/productsData';

function Store(props) {
  const productsArray = productsData.productsArray;

  const addToCartInStore = (productId) => () => {
    props.addToCartStore(productId);
  };

  const productsElements = Object.keys(productsArray).map((key) => (
    <Product key={key} player={productsArray[key]} addToCartProduct={addToCartInStore(key)} />
  ));

  return (
    <div>
      <h1>This is the store</h1>
      <div className="products">{productsElements}</div>
    </div>
  );
}

export default Store;
