import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const CardDetalle = () => {
  return (
    <>
      {/* ESTA SERÍA LA DEL DETALLE */}
      <div className="container mx-auto mt-4">
        <div className="row">
          <div>
            <div className="card px-3 py-3 border border-light shadow border-4 rounded-1">
            <Link to="/activity-description">
              <img
                src="https://images.pexels.com/photos/5235781/pexels-photo-5235781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img-top"
                alt="group of people playing soccer"
              />
            </Link>
              <div className="card-body">
                <h5 className="card-title text-center mt-1">Soccer</h5>
                <h6 className="card-subtitle mb-2 text-muted ">Date</h6>
                <h6 className="card-subtitle mb-2 text-muted">City</h6>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-info"
                    id="boton usuario"
                    onClick={() => {
                      alert("¡Ya estás apuntado!");
                    }}
                  >
                    <i className="fa-solid fa fa-user"></i>
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-info mt-1"
                    id="boton clima"
                  >
                    <i className="fa-solid fa fa-cloud"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
