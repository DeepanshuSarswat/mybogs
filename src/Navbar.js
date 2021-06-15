import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="nav">
        <h1>Deepanshu's Blog</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">New Blog</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
