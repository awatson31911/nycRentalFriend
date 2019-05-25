import React, { Component } from 'react';

import urlBuilder_rentHop from '../utils/urlBuilder_rentHop';

import Form from './Form';
import Header from './Header';

export default class App extends Component {
  constructor() {
    super();
    this.state = {

      rentHop: '',
      streetEasy: '',
      zumper: ''

    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event,
    neighborhoodCodes,
    minPrice,
    maxPrice,
    numBedrooms,
    numBathrooms,
    hasDogs,
    hasCats,
    hasWasherDryerInUnit,
    hasWasherDryerInBuilding,
    hasSharedOutdoorArea,
    hasPrivateOutdoorArea,
    hasFitnessGym,
    neighborhoods) {

    event.preventDefault();
    this.setState({
      rentHop: urlBuilder_rentHop(
        neighborhoodCodes,
        minPrice,
        maxPrice,
        numBedrooms,
        numBathrooms,
        hasDogs,
        hasCats,
        hasWasherDryerInUnit,
        hasWasherDryerInBuilding,
        hasSharedOutdoorArea,
        hasPrivateOutdoorArea,
        hasFitnessGym,
        neighborhoods
      )
    });
  }

  render() {
    return (
      <div className='main-container'>

        <Header />

        <section id='form'>
          <Form handleSubmit={this.handleSubmit} />
        </section>

        <section id='search-results' className='search-results-container'>
          This section will hold the search results
        </section>

        <section id='site-info' className='site-info-container'>
          This section will hold the individual site info
        </section>

      </div>
    );
  }

}