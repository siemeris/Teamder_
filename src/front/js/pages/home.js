import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Jumbotron02 from "/workspace/Teamder/src/front/img/Jumbotron02.png";
import { Card } from "/workspace/Teamder/src/front/js/component/card.js";
import { CardDetalle } from "/workspace/Teamder/src/front/js/component/cardDetalle.js";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className=" homeBody container w-75">
      <div className="text-center mt-1">
        <p>
          <img src={Jumbotron02} className="w-100 h-25" />
        </p>
      </div>
      <Card />
    </div>
  );
};
