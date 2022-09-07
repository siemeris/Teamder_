import React from "react";
import { Link } from "react-router-dom";
import Voley from "/workspace/Teamder/src/front/img/Voley.png"
import Soccer from "/workspace/Teamder/src/front/img/Diseño sin título.png"
import Basquet from "/workspace/Teamder/src/front/img/Basquet.png"
import Yoga from "/workspace/Teamder/src/front/img/Yoga.png"
import Running from "/workspace/Teamder/src/front/img/Running.png"
import Cycling from "/workspace/Teamder/src/front/img/Ciclyng.png"

export const Card = () => {
  return (
    <>
      {/* FIRST CARD */}

      <div className="container mx-auto mt-4">
        <div className="row">
          <div className="col-sm-2">
            <div
              className="card px-3 py-3 border border-gray rounded-1"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <Link to="/category/Soccer">
                {" "}
                <img
                  src={Soccer}
                  className="card-img-top"
                  alt="group of people playing soccer"
                />
              </Link>
              <hr></hr>
              <h5 className="card-title text-center mt-1">Soccer</h5>
            </div>
          </div>

          {/* SECOND CARD*/}

          <div className="col-sm-2">
            <div
              className="card px-3 py-3 border border-gray rounded-1"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <Link to="/category/Cycling">
                {" "}
                <img
                  src={Cycling}
                  className="card-img-top"
                  alt="group of people cycling"
                />
              </Link>
              <hr></hr>
              <h5 className="card-title text-center  mt-1">Cycling</h5>
            </div>
          </div>

          {/* THIRD CARD*/}

          <div className="col-sm-2">
            <div
              className="card px-3 py-3 border border-gray rounded-1"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <Link to="/category/Volleyball">
                {" "}
                <img
                  src={Voley}
                  className="card-img-top"
                  alt="group of people playing volleyball"
                />
              </Link>
              <hr></hr>
              <h5 className="card-title text-center  mt-1">Volleyball</h5>
            </div>
          </div>

          {/* FOURTH CARD */}
         
          <div className="col-sm-2">
            <div
              className="card px-3 py-3 border border-gray rounded-1"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <Link to="/category/Running">
                {" "}
                <img
                  src={Running}
                  className="card-img-top"
                  alt="group of people running"
                />
              </Link>
              <hr></hr>
              <h5 className="card-title text-center  mt-1">Running</h5>
            </div>
          </div>

          {/* FIFTH CARD */}

          <div className="col-sm-2">
            <div
              className="card px-3 py-3 border border-gray rounded-1"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <Link to="/category/Basketball">
                {" "}
                <img
                  src={Basquet}
                  className="card-img-top"
                  alt="group of people playing basketball"
                />
              </Link>
              <hr></hr>
              <h5 className="card-title text-center  mt-1">Basketball</h5>
            </div>
          </div>         

          {/* SIXTH CARD */}

          <div className="col-sm-2">
            <div
              className="card px-3 py-3 border border-gray rounded-1 "
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <Link to="/category/Yoga">
                {" "}
                <img
                  src={Yoga}
                  className="card-img-top"
                  alt="group of people doing yoga"
                />
              </Link>
              <hr></hr>
              <h5 className="card-title text-center  mt-1">Yoga</h5>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};