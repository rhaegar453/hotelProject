import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";

const loadingContainer = props => {
  return <div>Loading map...</div>;
};

class MapG extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Map zoom={20} center={{ lat: 40.854885, lng: -88.081807 }} />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCTB5vbYfnM5surje20ytBIrYP9vEd7wNA",
  LoadingContainer: loadingContainer
})(Map);
