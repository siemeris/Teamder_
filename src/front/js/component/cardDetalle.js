import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { Context } from "../store/appContext";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const CardDetalle = () => {
  useEffect(() => {
    viewAlert();
  }, []);
  const viewAlert = () => {
    Swal.fire("¡Ya estás apuntado!", "Lo has hecho muy bien", "succes");
  };
  return (
    <>
      {/* ESTA SERÍA LA DEL DETALLE */}
      <div className="container mx-auto mt-4">
        <div className="row">
          <div className="col-md-4">
            <div
              className="card"
              style={{
                width: "20rem",
                height: "30rem",
              }}
            >
              <img
                src="https://images.pexels.com/photos/5235781/pexels-photo-5235781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img-top"
                alt="group of people playing soccer"
              />
              <div className="card-body">
                <h5 className="card-title">Soccer</h5>
                <h6 className="card-subtitle mb-2 text-muted">Date</h6>
                <h6 className="card-subtitle mb-2 text-muted">City</h6>

                <h6 className="card-subtitle mb-2 text-muted">
                  <i className="fa-solid fa fa-user"></i>
                </h6>

                <a href="#" className="btn ">
                  <i className="fa fa -solid fa -cloud-sun-rain"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
