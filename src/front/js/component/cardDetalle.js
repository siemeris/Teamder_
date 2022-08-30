import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import soccer from "/workspace/Teamder/src/front/img/Diseño sin título.png";
import Basquet from "/workspace/Teamder/src/front/img/Basquet.png";
import Ciclyn from "/workspace/Teamder/src/front/img/Ciclyng.png";
import Running from "/workspace/Teamder/src/front/img/Running.png";
import Voley from "/workspace/Teamder/src/front/img/Voley.png";
import Yoga from "/workspace/Teamder/src/front/img/Yoga.png";

export const CardDetalle = () => {
  const { store, actions } = useContext(Context);
  const [category, setCategory] = useState("");

  useEffect(() => {
    actions.getActivities();
  }, []);

  let hangmanImage = null;
  switch (category) {
    case "Soccer":
      hangmanImage = soccer;
      // console.log("Soccer");
      break;
    case "Yoga":
      hangmanImage = Yoga;
      // console.log("Yoga");
      break;
    case "Basquetball":
      hangmanImage = Basquet;
      // console.log("Basquet");
      break;
    case "Ciclyng":
      hangmanImage = Ciclyn;
      // console.log("Ciclyn");
      break;
    case "Running":
      hangmanImage = Running;
      // console.log("Running");
      break;
    case "Voleyball":
      hangmanImage = Voley;
      // console.log("Voleyball");
      break;
    default:
      hangmanImage = null;
  }

  return (
    <div className="container mt-4">
      <div
        className="row d-flex flex-column"
        style={{ height: "15rem", overflowX: "auto" }}
      >
        {store.activities.map((value, index) => {
          setCategory(value.category);
          console.log(value.category);
          return (
            <div
              key={index}
              className="card px-1 mx-2 py-1 border border-light shadow border-4 rounded-1"
              style={{ height: "14rem", width: "14rem" }}
            >
              <div className="card-body">
                <h5 className="card-title text-center mt-1">
                  {" "}
                  <Link to="/activity-description">
                    <img
                      src={hangmanImage}
                      className="card-img-top mx-2"
                      style={{ width: "1.5rem" }}
                      alt="group of people playing soccer"
                    />
                  </Link>
                  {value.category}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted ">{value.date}</h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  {value.location}, {value.city}
                </h6>
                <hr></hr>
                <div className="text-center mt-2">
                  <button
                    type="button"
                    className="btn btn-outline-info "
                    id="boton usuario"
                    onClick={() => {
                      actions.joinActivity({
                        index: value.id,
                      });
                    }}
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
