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
      priceMax: 50000,
      isApartment: false,
      isCondo: false,
      isCoOp: false,
      hasElevator: false,
      hasWasherDryerInUnit: false,
      hasWasherDryerInBuilding: false,
      hasDishwasher: false,
      hasSharedOutdoorArea: false,
      hasPrivateOutdoorArea: false,
      hasDogs: false,
      hasCats: false,
      hasFitnessGym: false,
      selectedNeighborhoods: {
        brooklyn: {
          all: false,
          neighborhoods: {}
        },
        bronx: {
          all: false,
          neighborhoods: {}
        },
        manhattan: {
          all: false,
          neighborhoods: {}
        },
        queens: {
          all: false,
          neighborhoods: {}
        },
        statenIsland: {
          all: false,
          neighborhoods: {}
        }
      }
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

        <div className='form-container__row form-container__row--1'>
          <Form_neighborhoods handleChange={this.handleChange} />
          <Form_prices handleChange={this.handleChange} />
        </div>

        <div className='form-container__row form-container__row--2'>
          <GoogleMap />
          <Form_amenities handleChange={this.handleChange} />
        </div>

        
      </form>
    );
  }
}