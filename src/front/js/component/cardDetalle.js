import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import soccer from "/workspace/Teamder/src/front/img/Diseño sin título.png";
import Basquet from "/workspace/Teamder/src/front/img/Basquet.png";
import Ciclyn from "/workspace/Teamder/src/front/img/Ciclyng.png";
import Running from "/workspace/Teamder/src/front/img/Running.png";
import Voley from "/workspace/Teamder/src/front/img/Voley.png";
import Yoga from "/workspace/Teamder/src/front/img/Yoga.png";

export const CardDetalle = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getActivities();
  }, []);

  const hangman = (Image) => {
    let hangmanImage = null;

    switch (Image) {
      case "Soccer":
        hangmanImage = soccer;
        break;
      case "Yoga":
        hangmanImage = Yoga;
        break;
      case "Basketball":
        hangmanImage = Basquet;
        break;
      case "Cycling":
        hangmanImage = Ciclyn;
        break;
      case "Running":
        hangmanImage = Running;
        break;
      case "Volleyball":
        hangmanImage = Voley;
        break;
      default:
        hangmanImage = null;
    }
    return hangmanImage;
  };
  let image = null;
  return (
    <div className="container mt-4">
      <div
        className="row d-flex flex-column"
        style={{ height: "15rem", overflowX: "auto" }}
      >
        {store.activities.map((value, index) => {
          return (
            <div
              key={index}
              className="card px-1 mx-2 py-1 border border-light shadow border-4 rounded-1"
              style={{ height: "14rem", width: "14rem" }}
            >
              <div className="card-body">
                <h5 className="card-title text-center mt-1">
                  {(image = hangman(value.category))}
                  <img
                    src={image}
                    className="card-img-top mx-2"
                    style={{ width: "1.5rem" }}
                    // alt="group of people playing"
                  />
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
