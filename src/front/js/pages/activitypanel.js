import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./activitypanel.css";
import { AddActivity } from "./addactivity.js";

export function ActivityPanel() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="app-body mt-5">
            <main>
                <div className="container">
                    <div className="div-event">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div>
                                            <h2>Events</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <div className="div-create text-end">
                                            <h6>
                                                Create event
                                                <button type="button" className="btn btn-outline-info btn-sm ms-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    +
                                                </button>

                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="cards col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div>
                                            <div
                                                className="event-card card"
                                                style={{ backgroundColor: "rgb(135, 206, 235)" }}
                                            >
                                                <span className="position-absolute top-0 end-0 badge badge-light rounded-pill">
                                                    <button type="button" className="btn btn-link btn-sm text-secondary" data-toggle="tooltip" data-placement="top" title="edit" data-bs-toggle="modal" data-bs-target="#staticBackdropEDIT"><i className="far fa fa-edit"></i></button>
                                                    <button type="button" className="btn btn-link btn-sm text-danger" data-toggle="tooltip" data-placement="top" title="delete" data-bs-toggle="modal" data-bs-target="#staticBackdropDEL"><i className="far fa fa-trash"></i></button>
                                                    <span className="visually-hidden"></span>
                                                </span>
                                                <div className="card-body">
                                                    <div className="card-title h5">Soccer</div>
                                                    <h3 className="event-type">Soccer events</h3>
                                                    <p className="event-time">11:47 AM - 11:50 AM</p>

                                                </div>

                                            </div>
                                            <div className="event-card date-card card">
                                                <div className="date-body card-body">
                                                    <h3 className="event-type month">JUN</h3>
                                                    <h3 className="event-type date">11</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cards col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div>
                                            <div
                                                className="event-card card"
                                                style={{ backgroundColor: "rgb(135, 206, 235)" }}
                                            >
                                                <span className="position-absolute top-0 end-0 badge badge-light rounded-pill ">
                                                    
                                                    <button type="button" className="btn btn-link btn-sm text-secondary" data-toggle="tooltip" data-placement="top" title="edit" data-bs-toggle="modal" data-bs-target="#staticBackdropEDIT"><i className="far fa fa-edit"></i></button>
                                                    <button type="button" className="btn btn-link btn-sm text-danger" data-toggle="tooltip" data-placement="top" title="delete" data-bs-toggle="modal" data-bs-target="#staticBackdropDEL"><i className="far fa fa-trash"></i></button>
                                                    <span className="visually-hidden"></span>
                                                </span>
                                                <div className="card-body">
                                                    <div className="card-title h5">Trekking</div>
                                                    <h3 className="event-type">Trekking activities</h3>
                                                    <p className="event-time">11:00 AM - 11:30 AM</p>
                                                </div>
                                            </div>
                                            <div className="event-card date-card card">
                                                <div className="date-body card-body">
                                                    <h3 className="event-type month">JUN</h3>
                                                    <h3 className="event-type date">12</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cards col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div>
                                            <div
                                                className="event-card card"
                                                style={{ backgroundColor: "rgb(135, 206, 235)" }}
                                            >
                                                <span className="position-absolute top-0 end-0 badge badge-light rounded-pill ">
                                                    <button type="button" className="btn btn-link btn-sm text-secondary" data-toggle="tooltip" data-placement="top" title="edit" data-bs-toggle="modal" data-bs-target="#staticBackdropEDIT"><i className="far fa fa-edit"></i></button>
                                                    <button type="button" className="btn btn-link btn-sm text-danger" data-toggle="tooltip" data-placement="top" title="delete" data-bs-toggle="modal" data-bs-target="#staticBackdropDEL"><i className="far fa fa-trash"></i></button>
                                                    <span className="visually-hidden"></span>
                                                </span>
                                                <div className="card-body">
                                                    <div className="card-title h5">Basket</div>
                                                    <h3 className="event-type">Address</h3>
                                                    <p className="event-time">11:00 AM - 11:30 AM</p>
                                                </div>
                                            </div>
                                            <div className="event-card date-card card">
                                                <div className="date-body card-body">
                                                    <h3 className="event-type month">JUN</h3>
                                                    <h3 className="event-type date">16</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <div>
                                    <h4>Calendar</h4>
                                </div>
                                <Calendar onChange={onChange} value={value} locale="en-GB" />
                                {" "}
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </main>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Create event</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <AddActivity />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-info">Add Activity</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="staticBackdropEDIT" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Edit event</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <AddActivity />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-info">Edit activity</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="staticBackdropDEL" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Delete event</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete this event?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}
