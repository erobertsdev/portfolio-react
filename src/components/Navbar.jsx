import { Link } from 'react-router-dom';
import './styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="links">
        <Link className="navbar-link" to="/">About</Link>
        <Link className="navbar-link" to="/projects">Projects</Link>
        <Link className="navbar-link" to="/blog">Blog</Link>
        <Link className="navbar-link" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;