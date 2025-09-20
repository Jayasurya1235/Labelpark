import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Header() {
  return (
    <div className="header">
      <img
        src="/Labelpark/images/Logo.png"
        alt="Labelpark Logo"
        className="logo"
      />

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
