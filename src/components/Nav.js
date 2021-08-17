import { Link } from 'react-router-dom';
import CartButton from './CartButton';

function Nav(props) {
  return (
    <nav>
      <div className="nav-left-div">
        <h1>Football Legends Store</h1>
      </div>

      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/store">
          <li>Store</li>
        </Link>
      </ul>

      <div className="nav-right-div">
        <CartButton displayCart={props.displayCart}></CartButton>
      </div>
    </nav>
  );
}

export default Nav;
