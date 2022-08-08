import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../component/navbar"
import { Footer } from "../component/footer"

export const ActivityDetails = () => {
    const {store, actions} = useContext(Context);
    const {id} = useParams();

    useEffect(() => {
        actions.loadActivityDetail(id);
    },[]);

    return(
        <>
        <div className="container text-white">
            <h1 className="d-block text-center text-warning m-5">{"store"}</h1>
            <div className="d-flex">
            <img src={"" +  + ".jpg"} className="border-warning width: w-25 h-25" alt="Character"/>
                <div className="card ms-5 bg-black">
                    <div className="card-header bg-warning">
                        Description
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-black text-white">{"store"}</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
};