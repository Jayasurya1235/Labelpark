import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

export default function Header() {
  const location = useLocation();

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
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className={location.pathname === "/product" ? "active" : ""}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={location.pathname === "/services" ? "active" : ""}
            >
              Service
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
