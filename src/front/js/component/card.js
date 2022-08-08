import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { Context } from "../store/appContext";
export const Card = (props) => {
  return (
    <>
      <div
        className="card"
        style={{
          width: "20rem",
          height: "30rem",
          margin: "1rem",
        }}
      >
        <div className="card" style="width: 18rem;">
          <img
            src="https://www.guiadelnino.com/var/guiadelnino.com/storage/images/juegos-y-fiestas/juegos-para-fiestas-infantiles/10-juegos-para-una-fiesta-infantil-de-futbol/7610585-5-esl-ES/10-juegos-para-una-fiesta-infantil-de-futbol.jpg"
            className="card-img-top"
            alt="niños jugando al futbol"
          />
          <div className="card-body">
            <h5 className="card-title"> {props.name}</h5>
            <p className="card-text">{props.descripcion_de_la_actividad}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{props.category}</li>
            <li className="list-group-item">{props.time}</li>
            <li className="list-group-item">{props.city}</li>
            <li className="list-group-item">{props.location}</li>
            <li className="list-group-item">{props.weather}</li>
            <li className="list-group-item">{props.players}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  descripcion_de_la_actividad: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.number,
  city: PropTypes.number,
  location: PropTypes.string,
  weather: PropTypes.string,
  players: PropTypes.number,
};
