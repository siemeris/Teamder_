import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import soccer from "/workspace/Teamder/src/front/img/Diseño sin título.png";

export const CardDetalle = () => {
  const { store, actions } = useContext(Context);
  const [temp, setTemp] = useState("");
  const [icon, setIcon] = useState("");
  const [defaultOptions, setOpt] = useState({
    loop: true,
    autoplay: true,
    animationData: null,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  })
  const [location, setLocation] = useState("")

 
  // const url2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&appid=74b3467d2c3033271c21502ee8e7ca5e&units=metric"

  useEffect(()=>{actions.getActivities();},[])
  
useEffect(()=>{
   actions.getWeather()
 },[store.location])
  

  return (
    <div className="container mt-4">
      <div className="row d-flex flex-column" style={{height: "16rem", overflowX:"auto"}}>
      {store.activities.map((value,index) => {
        store.location=value.city
        console.log(store.location, "store.location")
        console.log(value.city)
        // actions.getWeather()
        return (
          
          <div key={index} className="card px-1 mx-2 py-1 border border-light shadow border-4 rounded-1" style={{height: "14rem", width: '14rem'}}>
            <div className="card-body">
              <h5 className="card-title text-center mt-1">
                {" "}
                <Link to="/activity-description">
                  <img
                    src={soccer}
                    className="card-img-top mx-2"
                    style={{ width: "1.5rem" }}
                    alt="group of people playing soccer"
                  />
                </Link>
                {value.category}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted ">{value.date}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{value.location}, {value.city}</h6>
                  <span>
                    
                    <img src={store.urlIcons[index]}></img>
                    {temp}ºC
                  </span>
              <hr></hr>
              <div className="text-center mt-2">
                <button
                  type="button"
                  className="btn btn-outline-info "
                  id="boton usuario"
                  onClick={() => {actions.joinActivity({
                    index: value.id
                  });
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        )})}
        </div>
        </div>
        )
};
