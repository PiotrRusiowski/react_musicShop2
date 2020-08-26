import React from "react";
import GoogleMapReact from "google-maps-react";
import "./Map.css";
import useSWR from "swr";
import map from "../../assets/images/tempMap.png";
const Map = () => {
  return (
    <>
      <div>
        {/* <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyBwwd0h5-oq5yVpGgK7QHDg3JpLvEvoM44&callback=initMap",
        }}
        defaultCenter={{ lat: 52.20622, lng: 21.084036 }}
        defaultZoom={10}
      ></GoogleMapReact> */}
        <img src={map} alt="" className="map" />
      </div>
    </>
  );
};

export default Map;
