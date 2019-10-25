import React from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  KmlLayer,
} from 'react-google-maps';

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 40.724030, lng: -73.987610 }}
    >

      <KmlLayer
        url='http://www.google.com/maps/d/u/0/kml?mid=1p_jDZ6T6QFJ9-kUyW8kXplR2aYSzsQaE'
        options={{ preserveViewport: true }}
      />

    </GoogleMap>



  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function ReadyMap() {
  return (
    <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.MAP_KEY}`}
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div className='map' />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  );
}
export default ReadyMap;