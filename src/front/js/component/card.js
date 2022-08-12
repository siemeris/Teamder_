import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { Context } from "../store/appContext";
export const Card = () => {
  return (
    <>
      {/* FIRST ROW */}
      <div className="container mx-auto mt-4">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-6">
            <div
              className="card"
              style={{
                width: "20rem",
                height: "20rem",
              }}
            >
              {/* esto sería para que al pinchar la imagen nos redirija a otro componente */}
              <Link to="/CardDetalle">
                {" "}
                <img
                  src="https://images.pexels.com/photos/5235781/pexels-photo-5235781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="card-img-top"
                  alt="group of people playing soccer"
                />
              </Link>
              <h5 className="card-title">Soccer</h5>
            </div>
          </div>

          {/* Segunda card */}
          <div className="col-12 col-md-4 col-lg-6">
            <div
              className="card"
              style={{
                width: "20rem",
                height: "20rem",
              }}
            >
              {/* esto sería para que al pinchar la imagen nos redirija a otro componente */}
              <Link to="/CardDetalle">
                {" "}
                <img
                  src="https://images.pexels.com/photos/10855503/pexels-photo-10855503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="card-img-top"
                  alt="group of people playing volleyball"
                />
              </Link>
              <h5 className="card-title">Volleyball</h5>
            </div>
          </div>

          {/* Tercera card */}

          <div className="col-12 col-md-4 col-lg-6">
            <div
              className="card"
              style={{
                width: "20rem",
                height: "20rem",
              }}
            >
              {/* esto sería para que al pinchar la imagen nos redirija a otro componente */}
              <Link to="/CardDetalle">
                {" "}
                <img
                  src="https://images.pexels.com/photos/5560205/pexels-photo-5560205.jpeg?auto=compress&cs=tinysrgb&w=800"
                  className="card-img-top"
                  alt="group of people playing basketball"
                />
              </Link>
              <h5 className="card-title">Basketball</h5>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND ROW */}

      <div className="container mx-auto mt-4">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-6">
            <div
              className="card"
              style={{
                width: "20rem",
                height: "20rem",
              }}
            >
              {/* esto sería para que al pinchar la imagen nos redirija a otro componente */}
              <Link to="/CardDetalle">
                {" "}
                <img
                  src="https://images.pexels.com/photos/5235781/pexels-photo-5235781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="card-img-top"
                  alt="group of people playing soccer"
                />
              </Link>
              <h5 className="card-title">Soccer</h5>
            </div>
          </div>

          {/* Segunda card */}
          <div className="col-12 col-md-4 col-lg-6">
            <div
              className="card"
              style={{
                width: "20rem",
                height: "20rem",
              }}
            >
              {/* esto sería para que al pinchar la imagen nos redirija a otro componente */}
              <Link to="/CardDetalle">
                {" "}
                <img
                  src="https://images.pexels.com/photos/10855503/pexels-photo-10855503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="card-img-top"
                  alt="group of people playing volleyball"
                />
              </Link>
              <h5 className="card-title">Volleyball</h5>
            </div>
          </div>

          {/* Tercera card */}

          <div className="col-12 col-md-4 col-lg-6">
            <div
              className="card"
              style={{
                width: "20rem",
                height: "20rem",
              }}
            >
              {/* esto sería para que al pinchar la imagen nos redirija a otro componente */}
              <Link to="/CardDetalle">
                {" "}
                <img
                  src="https://images.pexels.com/photos/5560205/pexels-photo-5560205.jpeg?auto=compress&cs=tinysrgb&w=800"
                  className="card-img-top"
                  alt="group of people playing basketball"
                />
              </Link>
              <h5 className="card-title">Basketball</h5>
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
