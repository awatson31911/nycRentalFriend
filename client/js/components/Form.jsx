import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rentHopCodes, streetEasyCodes } from '../utils/neighborhoodCodes';

import GoogleMap from './GoogleMap';
import Form_amenities from './Form_amenities';
import Form_mainCriteria from './Form_mainCriteria';
import Form_neighborhoods from './Form_neighborhoods';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      amenity_priceMin: 250,
      amenity_priceMax: 50000,
      amenity_noFee: false,
      amenity_numBedrooms0: false,
      amenity_numBedrooms1: false,
      amenity_numBedrooms2: false,
      amenity_numBedrooms3: false,
      amenity_numBedrooms4: false,
      amenity_numBathrooms1: false,
      amenity_numBathrooms2: false,
      amenity_numBathrooms3: false,
      amenity_numBathrooms4: false,
      amenity_isRoom: false,
      amenity_isApartment: false,
      amenity_isCondo: false,
      amenity_isCoOp: false,
      amenity_hasElevator: false,
      amenity_hasWasherDryerInUnit: false,
      amenity_hasWasherDryerInBuilding: false,
      amenity_hasDishwasher: false,
      amenity_hasSharedOutdoorArea: false,
      amenity_hasPrivateOutdoorArea: false,
      amenity_hasDogs: false,
      amenity_hasCats: false,
      amenity_hasFitnessGym: false,
      all_brooklyn: false,
      'Bath Beach': false,
      'Bay Ridge': false,
      'Bedford-Stuyvesant': false,
      'Bensonhurst': false,
      'Bergen Beach': false,
      'Boerum Hill': false,
      'Borough Park': false,
      'Brighton Beach': false,
      'Brooklyn Heights': false,
      'Brooklyn Navy Yard': false,
      'Brownsville': false,
      'Bushwick': false,
      'Canarsie': false,
      'Carroll Gardens': false,
      'Clinton Hill': false,
      'Cobble Hill': false,
      'Coney Island': false,
      'Crown Heights': false,
      'Cypress Hills': false,
      'Ditmas Park': false,
      'DUMBO': false,
      'Downtown Brooklyn': false,
      'Dyker Heights': false,
      'East Flatbush': false,
      'East New York': false,
      'Flatbush': false,
      'Flatlands': false,
      'Floyd Bennett Airfield': false,
      'Fort Greene': false,
      'Gowanus': false,
      'Gravesend': false,
      'Greenpoint': false,
      'Greenwood Heights': false,
      'Kensington': false,
      'Mapleton': false,
      'Marine Park': false,
      'Midwood': false,
      'Mill Basin': false,
      'Ocean Hill': false,
      'Park Slope': false,
      'Prospect Heights': false,
      'Prospect Lefferts Gardens': false,
      'Prospect Park South': false,
      'Red Hook': false,
      'Sheepshead Bay': false,
      'Sunset Park': false,
      'Vinegar Hill': false,
      'Williamsburg': false,
      'Windsor Terrace': false,
      all_bronx: false,
      'Bedford Park': false,
      'Belmont': false,
      'Bronxwood': false,
      'Castle Hill': false,
      'Concourse': false,
      'Concourse Village': false,
      'East Tremont': false,
      'Fordham': false,
      'Highbridge': false,
      'Hunts Point': false,
      'Kingsbridge': false,
      'Laconia': false,
      'Longwood': false,
      'Marble Hill': false,
      'Morris Heights': false,
      'Morris Park': false,
      'Morrisania': false,
      'Mott Haven': false,
      'Mount Eden': false,
      'Mount Hope': false,
      'Norwood': false,
      'Parkchester': false,
      'Pelham Bay': false,
      'Pelham Parkway': false,
      'Riverdale': false,
      'Soundview/Clason Point': false,
      'Throgs Neck': false,
      'University Heights': false,
      'Van Nest': false,
      'Wakefield': false,
      'West Farms': false,
      'Westchester Village': false,
      'Williamsbridge': false,
      'Woodlawn Heights': false,
      all_manhattan: false,
      'Battery Park': false,
      'Central Harlem': false,
      'Chelsea': false,
      'Chinatown': false,
      'Civic Center': false,
      'East Harlem': false,
      'East Village': false,
      'Financial District': false,
      'Flatiron': false,
      'Garment District': false,
      'Gramercy Park': false,
      'Greenwich Village': false,
      'Hell\'s Kitchen': false,
      'Inwood': false,
      'Kips Bay': false,
      'Little Italy': false,
      'Lower East Side': false,
      'Midtown East': false,
      'Murray Hill': false,
      'NoHo': false,
      'NoLita': false,
      'NoMad': false,
      'Randalls-Wards Island': false,
      'Roosevelt Island': false,
      'SoHo': false,
      'Stuyvesant Town - Peter Cooper Village': false,
      'Theater District': false,
      'Tribeca': false,
      'Two Bridges': false,
      'Upper East Side': false,
      'Upper West Side': false,
      'Washington Heights': false,
      'West Harlem': false,
      'West Village': false,
      all_queens: false,
      'Astoria': false,
      'Auburndale': false,
      'Bayside': false,
      'Briarwood': false,
      'College Point': false,
      'Corona': false,
      'East Elmhurst': false,
      'Elmhurst': false,
      'Far Rockaway': false,
      'Flushing': false,
      'Flushing Meadows-Corona Park': false,
      'Forest Hills': false,
      'Forest Park': false,
      'Fresh Meadows': false,
      'Glen Oaks': false,
      'Glendale': false,
      'Hollis': false,
      'Howard Beach': false,
      'Jackson Heights': false,
      'Jamaica': false,
      'Jamaica Estates': false,
      'Jamaica Hills': false,
      'Kew Gardens': false,
      'Kew Gardens Hills': false,
      'Long Island City': false,
      'Maspeth': false,
      'Middle Village': false,
      'Ozone Park': false,
      'Rego Park': false,
      'Richmond Hill': false,
      'Ridgewood': false,
      'Rockaway Beach': false,
      'South Jamaica': false,
      'South Ozone Park': false,
      'St. Albans': false,
      'Sunnyside': false,
      'Whitestone': false,
      'Woodhaven': false,
      'Woodside': false,
      allStatenIsland: false,
      'East Shore': false,
      'Mid-Island': false,
      'North Shore': false,
      'South Shore': false

    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNeighborhood = this.handleChangeNeighborhood.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
  }

  handleBlur(event) {
    const target = event.target;
    target.parentNode.removeChild(target);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if (name.includes('priceMin') || name.includes('priceMax')) {
      this.setState({
        [name]: parseInt(value) ? parseInt(value) : 0
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  handleChangeNeighborhood(event) {
    const target = event.target;
    const neighborhood = target.name.split('-')[1];
    const value = target.checked;

    this.setState({
      [neighborhood]: value
    });
  }

  handleChangeSelect(event) {
    const target = event.target;
    const value = target.value;
    target.previousSibling.value = value;
  }


  handleFocus(event) {
    event.preventDefault();
    const target = event.target;

    if (!target.nextSibling) {
      const selectElement = document.createElement('select');
      const priceArray = [];

      selectElement.id = 'form-price-select';
      selectElement.className = 'form--price-list';
      selectElement.size = 10;
      selectElement.onchange = this.handleChangeSelect;
      selectElement.onkeyup = this.handleKeyUp;
      selectElement.onblur = this.handleBlur;

      for (let price = 250; price < 50000; price += 250) {
        priceArray.push(price);
      }

      priceArray.forEach((price) => {
        const optionElement = document.createElement('option');
        optionElement.key = price;
        optionElement.value = `${price}`;
        optionElement.innerText = `${price}`;
        //optionElement.onkeyup = this.handleKeyUp;
        selectElement.append(optionElement);
      });

      document.getElementById(target.parentElement.id).append(selectElement);
    } else {
      const child = target.nextSibling;
      child.parentNode.removeChild(child);
    }
  }

  handleKeyUp(event) {
    event.preventDefault();

    if (event.keyCode === 13) {
      const priceSelect = document.getElementById('form-price-select');
      this.handleChange(event);

      if (priceSelect) {
        this.handleChangeSelect(event);
        priceSelect.parentNode.removeChild(priceSelect);

      }
    }
  }

  handleSelectAll(borough, target) {
    const selectAll = target.name === 'select-all';
    const neighborhoodNodes = document.getElementsByClassName(`modal-${borough}`)[0]
      .getElementsByTagName('label');


    Array.from(neighborhoodNodes).map((neighborhoodNode) => {
      const neighborhood = neighborhoodNode.textContent;
      //neighborhoodNode.checked = selectAll;
      this.setState({
        [neighborhood]: selectAll,
        [`all_${borough}`]: selectAll
      });
    });
  }

  render() {
    return (
      <form className='form-container' onSubmit={(event) => {
        this.props.handleSubmit(
          event,
          rentHopCodes,
          streetEasyCodes,
          this.state
        );
      }
      }>

        <div className='form-container__row form-container__row--1'>
          <Form_neighborhoods
            handleChange={this.handleChangeNeighborhood}
            allNeighborhoods={this.state}
            handleSelectAll={this.handleSelectAll}
          />
          <Form_mainCriteria
            handleChange={this.handleChange}
            handleFocus={this.handleFocus}
            handleKeyUp={this.handleKeyUp}
            amenities={this.state}
          />
        </div>

        <div className='form-container__row form-container__row--2'>
          <GoogleMap />
          <Form_amenities
            handleChange={this.handleChange}
            amenities={this.state}
          />
        </div>

        <div className="button--submit" >
          <button type='submit'>
            Submit
          </button>
        </div>

      </form>
    );
  }
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};