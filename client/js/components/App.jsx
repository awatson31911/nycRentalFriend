import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import Form from './Form_renting';

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat:40.724030, lng:-73.987610 }}
    />
    
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default class App extends Component {

  render() {
    return (
      <Form />
    );
  }

}