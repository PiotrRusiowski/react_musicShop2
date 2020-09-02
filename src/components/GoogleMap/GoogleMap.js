import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./GoogleMap.css";

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 52.237049,
      lng: 21.017532,
    },
    zoom: 11,
  };
  render() {
    return (
      <div className="googleMap__wrapper">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <div
            className="googleMap__mark__wrapper"
            lat={52.247976}
            lng={21.015256}
          >
            <h4 className="googleMap__mark__text">We are here</h4>
          </div>
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
