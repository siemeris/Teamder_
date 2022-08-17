import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <>
      {/* FIRST ROW */}
      {/* FIRST CARD */}
      <div className="container mx-auto mt-4">
        <div className="row">
          <div className="col-md-4">
            <div
              className="card px-3 py-3 border border-gray rounded-1"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              {/* esto sería para que al pinchar la imagen nos redirija a otro componente */}
              <Link to="/category">
                {" "}
                <img
                  src="https://images.pexels.com/photos/5235781/pexels-photo-5235781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="card-img-top"
                  alt="group of people playing soccer"
                />
              </Link>
              <h5 className="card-title text-center mt-1">Soccer</h5>
            </div>
          </div>

          {/* SECOND CARD*/}
          <div className="col-md-4">
            <div
              className="card px-3 py-3 border border-gray rounded-1"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              {/* esto sería para que al pinchar la imagen nos redirija a otro componente */}
              <Link to="/category">
                {" "}
                <img
                  src="https://images.pexels.com/photos/10855503/pexels-photo-10855503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="card-img-top"
                  alt="group of people playing volleyball"
                />
              </Link>
              <h5 className="card-title text-center  mt-1">Volleyball</h5>
            </div>
          </div>

          {/* THIRD CARD*/}

          <div className="col-md-4">
            <div
              className="card px-3 py-3 border border-gray rounded-1"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              {/* esto sería para que al pinchar la imagen nos redirija a otro componente */}
              <Link to="/category">
                {" "}
                <img
                  src="https://images.pexels.com/photos/5560205/pexels-photo-5560205.jpeg?auto=compress&cs=tinysrgb&w=800"
                  className="card-img-top"
                  alt="group of people playing basketball"
                />
              </Link>
              <h5 className="card-title text-center  mt-1">Basketball</h5>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND ROW */}

      {/* FOURTH CARD */}
      <div className="container mx-auto mt-4 ">
        <div className="row">
          <div className="col-md-4">
            <div
              className="card px-3 py-3 border border-gray rounded-1"
              style={{
                boxgit: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              {/* esto sería para que al pinchar la imagen nos redirija a otro componente */}
              <Link to="/category">
                {" "}
                <img
                  src="https://images.pexels.com/photos/5970275/pexels-photo-5970275.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  className="card-img-top"
                  alt="group of people cycling"
                />
              </Link>
              <h5 className="card-title text-center  mt-1">Cycling</h5>
            </div>
          </div>

          {/* FIFTH CARD */}
          <div className="col-md-4">
            <div
              className="card px-3 py-3 border border-gray rounded-1"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              {/* esto sería para que al pinchar la imagen nos redirija a otro componente */}
              <Link to="/category">
                {" "}
                <img
                  src="https://media.istockphoto.com/photos/mature-people-jogging-in-park-picture-id1319764741?k=20&m=1319764741&s=612x612&w=0&h=2jfy8EViJ6SfbdgfQnUq7mbjHmPrIwD-nskljXxiM5Q="
                  className="card-img-top"
                  alt="group of people running"
                />
              </Link>
              <h5 className="card-title text-center  mt-1">Running</h5>
            </div>
          </div>

          {/* SIXTH CARD */}

          <div className="col-md-4">
            <div
              className="card px-3 py-3 border border-gray rounded-1 "
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              {/* esto sería para que al pinchar la imagen nos redirija a otro componente */}
              <Link to="/category">
                {" "}
                <img
                  src="https://images.pexels.com/photos/8172933/pexels-photo-8172933.jpeg?auto=compress&cs=tinysrgb&w=800"
                  className="card-img-top"
                  alt="group of people doing yoga"
                />
              </Link>
              <h5 className="card-title text-center  mt-1">Yoga</h5>
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
