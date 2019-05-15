import React, { Component } from 'react';
import GoogleMap from './GoogleMap';
import Form_amenities from './Form_amenities';
import Form_prices from './Form_prices';
import Form_neighborhoods from './Form_neighborhoods';

export default class Form extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <form className='form-input-container'>

        <div className="form-input-container__row">
          <Form_neighborhoods handleChange={this.handleChange} />
          <Form_prices handleChange={this.handleChange} />
        </div>

        <div className="form-input-container__row">
          <GoogleMap />
          <Form_amenities handleChange={this.handleChange} />
        </div>
        
      </form>
    );
  }
}