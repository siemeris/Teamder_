import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <Link to="/" className="navbar-brand ps-2">Teamder</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto pe-5">

              <li className="nav-item"><Link to="/signup" className="nav-link"><button className="btn btn-primary">Sign Up</button></Link></li>
              <li className="nav-item"><Link to="/login" className="nav-link"><button className="btn btn-primary ms-3">Login</button></Link></li>
         </ul>
      </div>
    </nav>
  );
};