import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const linkStyle = {
    color: "white",
    textDecoration: "none"
  };
  return (
    <nav>
      <h1>Logo</h1>
      <ul className="nav-links">
        <Link style={linkStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={linkStyle} to="/shop">
          <li>Shop</li>
        </Link>
        <Link style={linkStyle} to="/item">
          <li>Item</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Nav;
