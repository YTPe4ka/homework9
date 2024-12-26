import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Create-User</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default Navbar;
