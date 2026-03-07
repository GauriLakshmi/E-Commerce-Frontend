import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <div className="logo">E-Commerce</div>
      <div>
        <Link to="/">Home</Link>
        {token ? (
          <>
            {role === "admin" && <Link to="/admin">Dashboard</Link>}
            {role === "user" && <Link to="/dashboard">Dashboard</Link>}
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;