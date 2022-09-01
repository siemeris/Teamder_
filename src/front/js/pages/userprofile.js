import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import teamderImg from "/workspace/Teamder/src/front/img/teamderImg.png";
import "../../styles/home.css";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { UserEdit } from "./useredit";


export const UserProfile = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {if (store.auth===true){navigate("/userProfile")} }
  , [store.auth])
  useEffect(() => {
    actions.getCurrentUser();
    console.log(store.currentUser.Current_email, "DatosUsuario del useEffect");
    console.log
}
    , [])
  
  return (
    <>
    <div className="container pt-5">
      <div className="main-body">
        <nav aria-label="breadcrumb" className="main-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="">User</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              User Profile
            </li>
          </ol>
        </nav>

        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width="150"
                  ></img>
                  <div className="mt-3">
                    <h4>{store.currentUser.Current_name} {store.currentUser.Current_lastname} </h4>
                    <p className="text-secondary mb-1">Active Teamder Player</p>
                    {/* <button className="btn btn-info">Follow</button>
                    <button className="btn btn-outline-info">Message</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{store.currentUser.Current_name} {store.currentUser.Current_lastname}</div>
                </div>
                {/* <hr> */}
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{store.currentUser.email}</div>
                </div>
                {/* <hr> */}
                {/* <hr> */}
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">(320) 380-4539</div>
                </div>
                {/* <hr> */}
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    Bay Area, San Francisco, CA
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Age</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{store.currentUser.Current_age}</div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Gender</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{store.currentUser.Current_gender}</div>
                </div>
                {/* <hr> */}
                <div className="row">
                  <div className="col-sm-12">

                    <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row gutters-sm">
              <div className="col-sm-12 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="row">
                      <h6 className=" col-10 material-icons text-dark mr-2">
                        Whatsapp Notifications
                      </h6>
                      <div className="col-2 text-end">
                        <div className="container">
                          <form action="/action_page.php">
                            <div className="form-check form-switch">
                              <input className="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" checked></input>
                              <label className="form-check-label" for="mySwitch">ON</label>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Edit User Profile</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <UserEdit />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-info">Save Changes</button>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
};
