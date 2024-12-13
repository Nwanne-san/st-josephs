import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Define map container style
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

// Define default center (latitude and longitude)
const center = {
  lat: 40.7128, // Replace with your latitude
  lng: -74.0060, // Replace with your longitude
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC2mEWPKVeJhWfBHpnegKt-CHIT_fKVERs"> {/* Replace with your API Key */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        {/* Add a marker */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
