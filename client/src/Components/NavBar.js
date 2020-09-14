import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { logout } from "../utils";

export default function NavBar() {
  return (
    <div className="navContainer">
      <div className="logo">🍏aDay</div>
      <nav>
        <NavLink className="navlink" to="/session">
          Dashboard
        </NavLink>
        <NavLink className="navlink" to="/session/profile">
          Profile
        </NavLink>
        <NavLink onClick={() => logout()} className="navlink" to="/">
          Logout
        </NavLink>
      </nav>
    </div>
  );
}
