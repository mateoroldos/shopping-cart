import { Link } from 'react-router-dom';

function Nav() {
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
    </nav>
  );
}

export default Nav;
