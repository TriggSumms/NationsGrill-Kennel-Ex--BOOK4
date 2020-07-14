import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


const NavBar = () => {
    return (
        <header>
            <h1 className="site-title">
                The Nation's Bar and Grill
        <br />
                <small>~Visit the Crew at our West Nasty Location~</small>
            </h1>
            <nav>
                <ul className="container">
                    <li>
            <Link className="nav-link" to="/">
                            Home
            </Link>
                    </li>;
                    <li>
            <Link className="nav-link" to="/animals">
                            Famous Locals
            </Link>
                    </li>;
          <li>
            <Link className="nav-link" to="/location">
                            Locations
            </Link>
                    </li>;
          <li>
             <Link className="nav-link" to="/employees">
                            Employees
            </Link>
                    </li>;
          <li>
            <Link className="nav-link" to="/owner">
                            Owners
            </Link>
                    </li>;
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;