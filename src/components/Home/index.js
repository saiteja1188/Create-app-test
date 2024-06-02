import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home Page Content</h1>
    <Link to="/about">About</Link> <br />
    <Link to="/contact">Contact</Link>
  </div>
);

export default Home;
