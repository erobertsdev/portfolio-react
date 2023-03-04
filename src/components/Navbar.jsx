import './styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="links">
        <a href="#" className="navbar-link active">About</a>
        <a href="#" className="navbar-link">Projects</a>
        <a href="#" className="navbar-link">Blog</a>
        <a href="#" className="navbar-link">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;