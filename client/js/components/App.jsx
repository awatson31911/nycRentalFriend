import React, { Component } from 'react';
import Form from './Form';


export default class App extends Component {
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
      <div className='main-container'>
        <section>
          <Form handleChange={this.handleChange} />
        </section>
        <section className='search-results-container'>
        This section will hold the search results
        </section>
        <section className='site-info-container'>
          This section will hold the individual site info
        </section>
      </div>
    );
  }

}