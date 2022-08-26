import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import soccer from "/workspace/Teamder/src/front/img/Diseño sin título.png";

export const CardDetalle = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getActivities();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-around">
      {store.activities.map((value,index) => {
        return (
          
          <div key={index} className="card px-1 py-1 border border-light shadow border-4 rounded-1" style={{width: '12rem'}}>
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
                {value.category}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted ">{value.date}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{value.city}</h6>
              <hr></hr>
              <div className="text-center mt-2">
                <button
                  type="button"
                  className="btn btn-outline-info "
                  id="boton usuario"
                  onClick={() => {actions.joinActivity({
                    index: value.id
                  });
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        )})}
        </div>
        </div>
        )
};
