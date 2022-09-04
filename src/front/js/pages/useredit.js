import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import teamderImg from "/workspace/Teamder/src/front/img/teamderImg.png";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const UserEdit = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");


  return (
    <>
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-lg-12">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        placeholder={store.currentUser.Current_name}
                      ></input>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Lastname</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setLastname(e.target.value)}
                        placeholder={store.currentUser.Current_lastname}
                      ></input>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Userame</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder={store.currentUser.Current_username}
                      ></input>
                    </div>
                  </div>
                  
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={store.currentUser.Current_email}
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="(320) 380-4539"
                        onChange={(e) => setMobile(e.target.value)}

                      ></input>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={store.currentUser.Current_email}
                        onChange={(e) => setAddress(e.target.value)}

                      ></input>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Age</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setAge(e.target.value)}
                        placeholder={store.currentUser.Current_age}
                      ></input>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Gender</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setGender(e.target.value)}
                        placeholder={store.currentUser.Current_gender}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-footer m-auto">
        <button
          type="button"
          className="btn btn-secondary mx-2"
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-info"
          onClick={async () => {
            await actions.editUser({
              email: email,
              password: password,
              name: name,
              username: username,
              lastname: lastname,
              mobile: mobile,
              age: age,
              gender: gender,
            });
          }}
          data-bs-dismiss="modal"
        >
          Save changes
        </button>
      </div>
    </>
  );
};
