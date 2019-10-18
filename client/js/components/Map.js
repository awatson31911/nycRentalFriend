import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 40.724030, lng: -73.987610 }}
    />

  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function ReadyMap() {
  return (
    <WrappedMap
      googleMapUrl={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,placeskey=${process.env.MAP_KEY}&callback=initMap"`}
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '400px' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  );
}
export default ReadyMap;