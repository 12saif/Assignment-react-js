import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="links">
          <Link className="link" to="/">
            <h6>Home</h6>
          </Link>
          <Link className="link" to="/about">
            <h6>About</h6>
          </Link>
          <Link className="link" to="/contact">
            <h6>Contact</h6>
          </Link>
          <Link className="link" to="/shoping">
            <h6>Shoping</h6>
          </Link>
          <Link className="link" to="/api">
            <h6>API</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
