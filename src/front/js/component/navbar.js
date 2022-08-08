import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <Link to="/" class="navbar-brand ps-2">Teamder</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav ms-auto pe-5">

              <li class="nav-item"><Link to="/signup" class="nav-link"><button className="btn btn-primary">Sign Up</button></Link></li>
              <li class="nav-item"><Link to="/login" class="nav-link"><button className="btn btn-primary ms-3">Login</button></Link></li>
         </ul>
      </div>
    </nav>
  );
};