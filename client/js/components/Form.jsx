import React, { Component } from 'react';
import GoogleMap from './GoogleMap';
import Form_amenities from './Form_amenities';
import Form_prices from './Form_prices';
import Form_neighborhoods from './Form_neighborhoods';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      priceMin: 0,
      priceMax: 5000,
      isApartment: false,
      isCondo: false,
      isCoOp: false,
      hasWasherDryerInUnit: false,
      hasWasherDryerInBuilding: false,
      hasDishwasher: false,
      hasOutdoorArea: false,
      hasPets: false,
      hasFitnessGym: false
    };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    const name = event.name;
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form className='form-container'>

        <div className='form-container__row'>
          <Form_neighborhoods handleChange={this.handleChange} />
          <Form_prices handleChange={this.handleChange} />
        </div>

        <div className='form-container__row'>
          <GoogleMap />
          <Form_amenities handleChange={this.handleChange} />
          <input type='submit' value='Submit Rental Criteria' />
        </div>

      </form>
    );
  }
}