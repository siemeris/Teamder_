import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { Context } from "../store/appContext";
export const Card = () => {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <div className="container mx-auto mt-4">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="card"
                  style={{
                    width: "20rem",
                    height: "20rem",
                  }}
                >
                  {/* esto sería para que al pinchar la imagen nos redirija a otro componente */}
                  <a href="http://www.secretariaplus.com">
                    {" "}
                    <img
                      src="https://images.pexels.com/photos/5235781/pexels-photo-5235781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      className="card-img-top"
                      alt="grupo de personas jugando futbol"
                    />{" "}
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">Futbol</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Segunda card */}
        <div className="col-4">
          <div className="container mx-auto mt-4">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="card"
                  style={{
                    width: "20rem",
                    height: "20rem",
                  }}
                >
                  {/* esto sería para que al pinchar la imagen nos redirija a otro componente */}
                  <a href="http://www.secretariaplus.com">
                    {" "}
                    <img
                      src="https://images.pexels.com/photos/10855503/pexels-photo-10855503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      className="card-img-top"
                      alt="grupo de personas jugando voley"
                    />{" "}
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">Voley</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tercera card */}

        <div className="col-4">
          <div className="container mx-auto mt-4">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="card"
                  style={{
                    width: "20rem",
                    height: "20rem",
                  }}
                >
                  {/* esto sería para que al pinchar la imagen nos redirija a otro componente */}
                  <a href="http://www.secretariaplus.com">
                    {" "}
                    <img
                      src="https://images.pexels.com/photos/5560205/pexels-photo-5560205.jpeg?auto=compress&cs=tinysrgb&w=800"
                      className="card-img-top"
                      alt="grupo de personas jugando basquet"
                    />{" "}
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">Basquet</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Card.propTypes = {
//   name: PropTypes.string,
//   descripcion_de_la_actividad: PropTypes.string,
//   category: PropTypes.string,
//   date: PropTypes.string,
//   time: PropTypes.number,
//   city: PropTypes.number,
//   location: PropTypes.string,
//   weather: PropTypes.string,
//   players: PropTypes.number,
// };
