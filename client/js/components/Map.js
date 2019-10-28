import React from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  KmlLayer,
  Polygon
} from 'react-google-maps';

import geoData from '../../../neighborhoodGeoData.json';


const boroughColors = {

}

function Map(props) {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 40.724030, lng: -73.987610 }}
    >
      
      <KmlLayer
        url='http://www.google.com/maps/d/u/0/kml?mid=1p_jDZ6T6QFJ9-kUyW8kXplR2aYSzsQaE'
        options={{ preserveViewport: true }}
      />

      {
        Object.keys(props.allCriteria)
          .filter(criterion => !criterion.includes('amenity'))
          .map((hood) => {
            let hoodCoords = null;

            if (geoData[hood]) {
              hoodCoords = geoData[hood].coords;
            }

            return (
              <Polygon
                paths={hoodCoords}
                strokeColor={'#FF0000'}
                strokeOpacity={0.8}
                strokeWeight={2}
                fillColor={'#FF0000'}
                fillOpacity={1}
              //visible={props.allCriteria[hood]}
              //onClick={} //onClick should set state to !props.allCriteria[hood]
              />
            )
          })
      }

    </GoogleMap>

  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function ReadyMap(props) {
  return (
    <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.MAP_KEY}`}
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div className='map' />}
      mapElement={<div style={{ height: '100%' }} />}
      allCriteria={props.allCriteria}
    />
  );
}
export default ReadyMap;