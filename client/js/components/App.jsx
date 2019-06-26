import React, { Component } from 'react';

import urlBuilder_rentHop from '../utils/urlBuilder_rentHop';
import urlBuilder_streetEasy from '../utils/urlBuilder_streetEasy';

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
    rentHopCodes,
    streetEasyCodes,
    state) {

    event.preventDefault();
    const rentHopUrl = urlBuilder_rentHop(
      rentHopCodes,
      state
    );
    const streetEasyUrl = urlBuilder_streetEasy(
      streetEasyCodes,
      state
    );

    // const zumperUrl = urlBuilder_rentHop(
    //   zumperCodes,
    //   state
    // );

    console.log(`rentHop url -----> ${rentHopUrl}
    streetEasy url -----> ${streetEasyUrl}`)

    this.setState({
      rentHop: rentHopUrl,
      streetEasy: streetEasyUrl,
      //zumper: zumperUrl
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