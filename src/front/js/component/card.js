import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { Context } from "../store/appContext";
export const Card = () => {
  return (
    <>
      <div className="container mx-auto mt-4">
        <div className="row">
          <div className="col-md-4">
            <div
              className="card"
              style={{
                width: "20rem",
                height: "25rem",
              }}
            >
              {/* esto sería para que al pinchar la imagen nos redirija a otro componente */}
              <a href="http://www.secretariaplus.com">
                {" "}
                <img
                  src="https://us.123rf.com/450wm/rrraven/rrraven1310/rrraven131000105/23083801-vector-icono-de-f%C3%BAtbol-azul-sobre-fondo-blanco-.jpg?ver=6"
                  className="card-img-top"
                  alt="balon de futbol"
                />{" "}
              </a>
              {/* esta sería la imagen sola */}
              {/* <img
                src="https://us.123rf.com/450wm/rrraven/rrraven1310/rrraven131000105/23083801-vector-icono-de-f%C3%BAtbol-azul-sobre-fondo-blanco-.jpg?ver=6"
                className="card-img-top"
                alt="balon de futbol"
              /> */}
              <div className="card-body">
                <h5 className="card-title">Futbol</h5>

                {/* enlaces para redirigir si es que no se quiere que la imagen funcione como boton */}
                {/* <a href="#" className="btn mr-2">
                  <i className="fas fa-link"></i> Activity description
                </a> */}
                {/* <a href="#" className="btn ">
                  <i class="fa-duotone fa- fa sun-cloud"></i>clima
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ESTA SERÍA LA DEL DETALLE
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
                <a href="#" className="btn mr-2">
                  <i class="fa-solid fa-calendar-days"></i>Apuntarse
                </a>
                <a href="#" className="btn ">
                  <i class="fa-solid fa fa-sun"></i>clima
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
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
