import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Jumbotron02 from "/workspace/Teamder/src/front/img/Jumbotron02.png";
import { Card } from "/workspace/Teamder/src/front/js/component/card.js";
import { CardDetalle } from "/workspace/Teamder/src/front/js/component/cardDetalle.js";
import { MapComponent } from "/workspace/Teamder/src/front/js/component/mapcomponent.jsx";
import LoginForm from "../component/login";



export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className=" homeBody container w-75">
      <div className="text-center mt-1">
        <p>
          <img src={Jumbotron02} className="w-100 h-25" />
        </p>
      </div>
      <h1 className="text-center text-info p-2 mt-5">Categories</h1>
      <Card />
      <h1 className="text-center text-info p-2 mt-5">Activities</h1>
      <div className="row">
        <div className="col-3">
          {" "}
          <CardDetalle />
        </div>
        <div className="col-3">
          {" "}
          <CardDetalle />
        </div>
        <div className="col-3">
          {" "}
          <CardDetalle />
        </div>
        <div className="col-3">
          {" "}
          <CardDetalle />
        </div>
      </div>
      <h1 className="text-center text-info p-2 mt-5">Near you</h1>
      <MapComponent />
    </div>
  );
};