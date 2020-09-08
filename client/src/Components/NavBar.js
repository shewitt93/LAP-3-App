import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

export default function NavBar() {
    return (
      <nav>
        <NavLink className="navlink" to="/session">
          Dashboard
        </NavLink>
        <NavLink className="navlink" to="/session/profile">
          Profile
        </NavLink>
            <NavLink className="navlink" to="/session/logout">
          Logout
        </NavLink>
      </nav>
    );
}
