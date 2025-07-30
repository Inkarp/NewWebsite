
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const defaultContainerStyle = {
  width: '100%',
  height: '200px', // Adjust as needed for the footer
};

const center = {
  lat: 17.43310657632745, // Example: Hyderabad
  lng: 78.55785124424406,
};


function Map({ style }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDrBMkfagQMgCc4ZJl-1rSp4z38kKJgpOY', // Use env variable in production
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={style || defaultContainerStyle}
      center={center}
      zoom={10}
    >
      {/* Add markers or other map elements here if needed */}
    </GoogleMap>
  ) : <p>Loading Map...</p>;
}

export default Map;




    