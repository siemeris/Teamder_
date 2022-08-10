import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { Context } from "../store/appContext";
export const CardDetalle = () => {
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
                src="https://us.123rf.com/450wm/rrraven/rrraven1310/rrraven131000105/23083801-vector-icono-de-f%C3%BAtbol-azul-sobre-fondo-blanco-.jpg?ver=6"
                className="card-img-top"
                alt="balon de futbol"
              />
              <div className="card-body">
                <h5 className="card-title">Futbol</h5>
                <h6 className="card-subtitle mb-2 text-muted">Date</h6>
                <h6 className="card-subtitle mb-2 text-muted">City</h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  <i className="fa-solid fa fa-user"></i>
                </h6>
                {/* alert te has apuntado */}
                <a href="#" className="btn ">
                  <i class="fa-solid fa fa-sun"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
