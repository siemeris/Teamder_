import React from "react";
import { Link } from "react-router-dom";
import Logo2 from "/workspace/Teamder/src/front/img/Logo2.png";
import "/workspace/Teamder/src/front/styles/navbar.css";
import { SignUpPage } from "/workspace/Teamder/src/front/js/component/signup.js" ;
import { LoginForm } from "/workspace/Teamder/src/front/js/component/login.js" ;

export const Navbar = () => {

  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">

<span className="TeamderLogo navbar-brand ml-auto d-flex ms-3" href="#">
        <img
          src={Logo2}
          alt="logo"
          width="30"
          height="30"
          className=" d-inline-block align-text-top"
        />
        <span className="ms-2 "><Link to="/" className="textologo navbar-brand ps-2"><span className="textologo">Teamder</span></Link></span>
      </span>
        <button className="navbar-toggler text-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto pe-5">
              <li className="nav-item">
                <Link to="/activitypanel" className="nav-link">
                  <button className="btn btn-light me-3 btn-outline-info">
                  <i className="fas fa-calendar-check text-info"></i>
                  </button>
                </Link></li>
              <li className="nav-item">
              <div className="dropdown mt-2 ">
                <button className="btn btn-light dropdown-toggle text-info btn-outline-info" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-user text-info"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Sign Up</a></li>
                  <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdropLOG">Login</a></li>
                  <li><a className="dropdown-item" href="/logout">Logout</a></li>
                </ul>
              </div>
              </li>
         </ul>
      </div>
    </nav>

    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Signup</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <SignUpPage />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="staticBackdropLOG" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Login</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};