import React from "react";
import "/workspace/Teamder/src/front/styles/navbar.css";
import { Link } from "react-router-dom";
import Logo2 from "/workspace/Teamder/src/front/img/Logo2.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <a className="TeamderLogo navbar-brand ml-auto d-flex ms-3" href="#">
        <img
          src={Logo2}
          alt="logo"
          width="30"
          height="30"
          className=" d-inline-block align-text-top"
        />
        <span className="textologo ms-2 ">Teamder</span>
      </a>
      <ul className="list-unstyled">
        <li class="nav-item dropdown me-3">
          <a
            class="nav-link dropdown-toggle text-info "
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-person-circle text-info"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a class="dropdown-item" href="#">
                Login
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Signup
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
