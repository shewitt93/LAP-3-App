import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

export default function NavBar() {
    return (
        <nav>
            <NavLink className="navlink" to='/'>Home</NavLink>
            <NavLink className="navlink" to='/profile'>Profile</NavLink>
            <NavLink className="navlink" to='/logout'>Logout</NavLink>
        </nav>
    )
}
