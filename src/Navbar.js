import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css"

function Navbar(){
    return (
        <nav className="navbar">
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/candy">Candy</NavLink>
          <NavLink exact to="/chips">Chips</NavLink>
          <NavLink exact to="/soda">Soda</NavLink>
        </nav>
    )
}

export default Navbar;