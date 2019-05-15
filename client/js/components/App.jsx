import React, { Component } from 'react';
// import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import Form_priceAmenities from './Form_priceAmenities';
// import Form_neighborhoods from './Form_neighborhoods';

// function Map() {
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat:40.724030, lng:-73.987610 }}
//     />

//   );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isApartment: false,
      isCondo: false,
      isCoOp: false,
      hasWasherDryeInUnit: false,
      hasWasherDryerInBuilding: false,
      hasDishwasher: false,
      hasOutdoorArea: false,
      hasPets: false,
      hasFitnessGym: false
    };
  }

  handleChange(event) {
    const name = event.name;
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    }).bind(this);
  }

  render() {
    return (
      <Form_priceAmenities handleChange={this.handleChange}/>
    );
  }

}