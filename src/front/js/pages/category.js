import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardDetalle } from "/workspace/Teamder/src/front/js/component/cardDetalle.js";

export const Category = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className=" homeBody container w-75">
      <h1 className="text-center text-info p-2 mt-5">Category Title</h1>
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
    </div>
  );
};
