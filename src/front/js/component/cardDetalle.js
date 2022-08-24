import React, { useContext } from "react";
import { Link } from "react-router-dom";
import soccer from "/workspace/Teamder/src/front/img/Diseño sin título.png";

export const CardDetalle = () => {
  return (
    <>
      {/* ESTA SERÍA LA DEL DETALLE */}
      <div className="container mx-auto mt-4">
        <div className="row">
          <div>
            <div className="card px-1 py-1 border border-light shadow border-4 rounded-1">
              <div className="card-body">
                <h5 className="card-title text-center mt-1">
                  {" "}
                  <Link to="/activity-description">
                    <img
                      src={soccer}
                      className="card-img-top mx-2"
                      style={{ width: "1.5rem" }}
                      alt="group of people playing soccer"
                    />
                  </Link>
                  Soccer
                </h5>
                <h6 className="card-subtitle mb-2 text-muted ">Date</h6>
                <h6 className="card-subtitle mb-2 text-muted">City</h6>
                <hr></hr>
                <div className="text-center mt-2">
                  <button
                    type="button"
                    className="btn btn-outline-info "
                    id="boton usuario"
                    onClick={() => {
                      alert("¡Ya estás apuntado!");
                    }}
                  >
                    Join
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
