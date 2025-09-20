import React from "react";
import "../App.css";
import About from "./About";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <img src="src/assets/Logo.png" alt="Labelpark Logo" className="logo" />
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/services">Service</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
