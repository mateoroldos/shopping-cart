import Product from './Product';
import productsData from '../data/productsData';

function Store() {
  const productsArray = productsData.productsArray;
  const productsElements = Object.keys(productsArray).map((key) => <Product key={key} player={productsArray[key]} />);

  return (
    <div>
      <h1>This is the store</h1>
      <div>{productsElements}</div>
    </div>
  );
}

export default Store;
