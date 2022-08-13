import React, { useContext } from "react";
import { Context } from "../store/appContext";
import teamderImg from "/workspace/Teamder/src/front/img/teamderImg.png";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const UserEdit = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-lg-12">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" placeholder="John Doe"></input>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" placeholder="john@example.com"></input>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" placeholder="(320) 380-4539"></input>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" placeholder="Bay Area, San Francisco, CA"></input>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Age</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" placeholder="25"></input>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Gender</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" placeholder="Male"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
