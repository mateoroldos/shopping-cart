import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-hero">
      <div>
        <h2>Welcome To The Football Legends Store</h2>
        <p>
          Making your dream team come true was never so easy!
          <br /> Buy your favourite players and recive them in less than a week.
        </p>
        <Link to="/store">
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
