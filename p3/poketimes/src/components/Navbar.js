import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
//NavLinks to use for active style
const Navbar = (props) => {
  // console.log("props", props);

  return (
    <nav className="nav-wrapper red darken-1">
      <div className="container">
        <a className="brand-logo">Poke Time</a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
