import React, { useState, useEffect, useContext } from "react";
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";

import { Context } from "../store/appContext";

export const MapComponent = () => {

    const { store, actions } = useContext(Context)
    const [activeInfoWindow, setActiveInfoWindow] = useState("");
    // const [pos, setPos] = useState({})

    useEffect(() => {
        store.markers=[]
        actions.getMarkers()
        //actions.getActivities();
        // console.log(store.markers, "markers del map component")
        // console.log(store.activities)
        //    navigator.geolocation.getCurrentPosition(
        //     ({ coords: { latitude: lat, longitude: lng } }) => {
        //       const pos = { lat, lng };
        //     setPos(pos)
        //       console.log(pos)
        //     })
    }, [store.activities])
    
    const containerStyle = {
        width: "100%",
        height: "400px",
    }
    // const center = pos
    const center = {
        lat: 40.422202620672174,
        lng: -3.7039278794489334,
    }
    const mapClicked = (event) => {
        console.log(event.latLng.lat(), event.latLng.lng())
    }
    const markerClicked = (marker, index) => {
        setActiveInfoWindow(index)
        console.log(marker, index)
    }
    const markerDragEnd = (event, index) => {
        console.log(event.latLng.lat())
        console.log(event.latLng.lng())
    }

    return (
        <LoadScript googleMapsApiKey='AIzaSyATlGRXnP8521RNDebgxQjoWXDk2yxgij0'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
                onClick={mapClicked}
            >
                {store.markers.map((marker, index) => (
                    <Marker
                        key={index}
                        position={marker.position}
                        label={marker.label}
                        draggable={marker.draggable}
                        onDragEnd={event => markerDragEnd(event, index)}
                        onClick={event => markerClicked(marker, index)}
                    >
                        {
                            (activeInfoWindow === index)
                            &&
                            <InfoWindow position={marker.position}>
                                <b>{marker.texto}, {marker.fecha}, {marker.lugar}</b>
                                {/* {marker.position.lat}, {marker.position.lng} */}
                            </InfoWindow>
                        }
                    </Marker>
                ))}
            </GoogleMap>
        </LoadScript>
    );
};