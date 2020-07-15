import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push('/');
  }

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
                                        <Link className="nav-link" to="/"> Home </Link>
                                </li>
                                  
                                <li>
                                        <Link className="nav-link" to="/animals"> Famous Locals </Link>
                                </li>
                                          
                                <li>
                                        <Link className="nav-link" to="/menu"> Menu </Link>
                                </li>
                                <li>
                                        <Link className="nav-link" to="/locations"> Locations </Link>
                                </li>
                                {props.hasUser
                                 ? <li>
                                        <Link className="nav-link" to="/employees"> Employees </Link>
                                </li>
                                : null}
                                  {/* No log in needed for owners....the cards contain no methods */}
                                <li>
                                        <Link className="nav-link" to="/owners"> Owners </Link>
                                </li>

                                  {/*  */}
                                {props.hasUser
                                ? <li>
                                        <span className="nav-link" onClick={handleLogout}> Logout </span>
                                </li>
                                :<li>
                                        <Link className="nav-link" to="/login">Login</Link>
                                </li>}
                        </ul>
                  </nav>
</header>
  );
};

export default withRouter(NavBar);