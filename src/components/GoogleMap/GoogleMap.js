import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./GoogleMap.css";
import styled from "styled-components";

const StyledGoogleMapWrapper = styled.div`
  height: 300px;
  width: 100%;
  overflow: hidden;
`;
const StyledMarkerWrapper = styled.div`
  color: white;
  background-color: red;
  padding: 12px 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 100% 100% 100% 0;
  width: 60px;
  height: 60px;
  transform: rotate(-45deg);
`;
const StyledMarkerText = styled.div`
  transform: rotate(45deg);
  font-weight: bold;
`;
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
      <StyledGoogleMapWrapper>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <StyledMarkerWrapper lat={52.247976} lng={21.015256}>
            <StyledMarkerText>We are here</StyledMarkerText>
          </StyledMarkerWrapper>
        </GoogleMapReact>
      </StyledGoogleMapWrapper>
    );
  }
}

export default GoogleMap;
