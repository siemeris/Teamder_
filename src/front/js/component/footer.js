import React, { Component } from "react";
import "/workspace/Teamder/src/front/styles/footer.css"

export const Footer = () => {
  return (
    <div className="footercss container-fluid p-0 ">
      <footer className="bg-light text-center text-white">
        <div className="container p-4">
          <section className="">
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "ac2bac" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Teamder
        </div>
      </footer>
    </div>
  );
};
