import React from "react";
import { Link } from "react-router-dom";
import Logo2 from "/workspace/Teamder/src/front/img/Logo2.png";
import "/workspace/Teamder/src/front/styles/navbar.css"
import {SignUpPage} from "/workspace/Teamder/src/front/js/component/signup.js" 


export const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">

<a className="TeamderLogo navbar-brand ml-auto d-flex ms-3" href="#">
        <img
          src={Logo2}
          alt="logo"
          width="30"
          height="30"
          className=" d-inline-block align-text-top"
        />
        <span className="ms-2 "><Link to="/" className="textologo navbar-brand ps-2"><span className="textologo">Teamder</span></Link></span>
      </a>
        <button className="navbar-toggler text-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto pe-5">
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  <button class="btn btn-light me-3 btn-outline-info">
                  <i class="fas fa-calendar-check text-info"></i>
                  </button>
                </Link></li>
              <li className="nav-item">
              <div class="dropdown mt-2 ">
                <button class="btn btn-light dropdown-toggle text-info btn-outline-info" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fas fa-user text-info"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop"/>Sign Up</li>
                  <li><a class="dropdown-item" href="/login">Login</a></li>
                  <li><a class="dropdown-item" href="/logout">Logout</a></li>
                </ul>
              </div>
              </li>
         </ul>
      </div>
    </nav>

    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Signup</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <SignUpPage />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" class="btn btn-info">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};