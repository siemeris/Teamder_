import React from "react";
import { Link } from "react-router-dom";
import Logo2 from "/workspace/Teamder/src/front/img/Logo2.png";


export const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light ">

<a className="TeamderLogo navbar-brand ml-auto d-flex ms-3" href="#">
        <img
          src={Logo2}
          alt="logo"
          width="30"
          height="30"
          className=" d-inline-block align-text-top"
        />
        <span className="textologo ms-2 "><Link to="/" className="navbar-brand ps-2">Teamder</Link></span>
      </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto pe-5">
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  <button class="btn btn-secondary me-3">
                  <i class="fas fa-calendar"></i>
                  </button>
                </Link></li>
              <li className="nav-item">
              <div class="dropdown mt-2 ">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fas fa-user"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" href="#">Sign up</a></li>
                  <li><a class="dropdown-item" href="#">Login</a></li>
                  <li><a class="dropdown-item" href="#">Logout</a></li>
                </ul>
              </div>
              </li>
         </ul>
      </div>
    </nav>
  );
};