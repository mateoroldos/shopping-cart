import { Link } from 'react-router-dom';
import CartButton from './CartButton';

function Nav(props) {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/store">
          <li>Store</li>
        </Link>
      </ul>
      <CartButton displayCart={props.displayCart}></CartButton>
    </nav>
  );
}

export default Nav;
