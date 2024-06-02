import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">My Blog</h1>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="list">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="list">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="list">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
