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


  // const url2 = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + location + "&appid=74b3467d2c3033271c21502ee8e7ca5e&units=metric"
  // "https://api.openweathermap.org/data/2.5/forecast?appid=74b3467d2c3033271c21502ee8e7ca5e&q=Madrid&units=metric"
  

  // useEffect(()=>{
  //    actions.getWeather()
  //  },[store.locationList])

  useEffect(() => { store.tempList=[]; store.iconsList=[]; actions.getWeather();}, [])
  // useEffect(()=>{
  //   store.tempList=[]
  //    actions.getWeather()
  //  },[store.locationList])

  // console.log(store.locationList, "listado location")
  // console.log(store.tempList, "listado temperaturas CardDetalle")
  // console.log(store.iconsList, "listado URLiconos CardDetalle")

  return (
    <div className="container mt-4">
      <div className="row d-flex flex-column" style={{ height: "18rem", overflowX: "auto" }}>
        {store.activities.map((value, index) => {
          // store.location=value.city
          // console.log(store.location, "store.location")
          // actions.getWeather(value.city)
          return (

            <div key={index} className="card px-1 mx-2 py-1 border border-light shadow border-4 rounded-1" style={{ height: "16rem", width: '14rem' }}>
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
                <h6 className="card-subtitle mb-2 text-muted">{value.location}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{value.city}</h6>
                <div className="text-center">
                  <img src={store.iconsList[index]}></img>
                  {store.tempList[index]}
                </div>
                <hr className="m-2"></hr>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-outline-info mt-1"
                    id="boton usuario"
                    onClick={() => {
                      actions.joinActivity({
                        index: value.id
                      });
                    }}
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
};
