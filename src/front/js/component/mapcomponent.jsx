import React, { useState, useEffect, useContext } from "react";
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
import { Context } from "../store/appContext";

export const MapComponent = () => {
 useEffect(())


    const {store, actions} = useContext(Context)

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


// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyDSDT6I4RRdO6Uk6hJt6Twp7AdEOcVer20");

// set response language. Defaults to english.
Geocode.setLanguage("en");

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("es");

// set location_type filter . Its optional.
// google geocoder returns more that one address for given lat/lng.
// In some case we need one address as response for which google itself provides a location_type filter.
// So we can easily parse the result for fetching address components
// ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
// And according to the below google docs in description, ROOFTOP param returns the most accurate result.
Geocode.setLocationType("ROOFTOP");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

store.activities.map((value,index) => {
    let direccion = value.location
    console.log(direccion)
    Geocode.fromAddress(direccion).then(
        
        (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        //   console.log(store.activities)
        console.log(lat, lng, "latitud")
          initialMarkers.push({
            position: {
                lat: lat,
                lng: lng
            },
            label: { color: "white", text: "P3" },
            draggable: true
        })
        console.log(initialMarkers, "array markers1")
        },
        (error) => {
          console.error(error);
        }
      );
    
        
})


// Get latitude & longitude from address.
Geocode.fromAddress("Plaza España").then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng, "test");
      console.log(initialMarkers, "array markers")

    },
    (error) => {
      console.error(error);
    }
  );


    
    
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

