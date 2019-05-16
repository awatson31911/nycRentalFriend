import React, { Component } from 'react';
import Form from './Form';
import Header from './Header';


export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='main-container'>
        <Header />
        <section id='form'>
          <Form handleChange={this.handleChange} />
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