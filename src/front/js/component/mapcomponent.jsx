import React, { useState } from "react";
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
    const initialMarkers = [
        {
            position: {
                lat: 40.417493528400676, 
                lng: -3.6840395636008494
            },
            label: { color: "white", text: "P1" },
            draggable: true
        },
        {
            position: {
                lat: 40.41941173836161, 
                lng: -3.732315259360686
            },
            label: { color: "white", text: "P2" },
            draggable: false
        },
        {
            position: {
                lat: 40.492950702185446,
                lng: -3.6316085526786237
            },
            label: { color: "white", text: "P3" },
            draggable: true
        },
    ];
    
    const [activeInfoWindow, setActiveInfoWindow] = useState("");
    const [markers, setMarkers] = useState(initialMarkers);

    const containerStyle = {
        width: "100%",
        height: "400px",
    }

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
                {markers.map((marker, index) => (
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
                                <b>{marker.position.lat}, {marker.position.lng}</b>
                            </InfoWindow>
                        }  
                    </Marker>
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
