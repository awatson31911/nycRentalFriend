import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rentHopCodes } from '../utils/neighborhoodCodes';

import GoogleMap from './GoogleMap';
import Form_amenities from './Form_amenities';
import Form_prices from './Form_prices';
import Form_neighborhoods from './Form_neighborhoods';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      amenity_priceMin: 0,
      amenity_priceMax: 50000,
      amenity_numBedrooms: [],
      amenity_numBathrooms: [],
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
      allBrooklyn: false,
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
      allBronx: false,
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
      allManhattan: false,
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
      allQueens: false,
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
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNeighborhood = this.handleChangeNeighborhood.bind(this);
  }


  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [`amenity_${name}`]: value
    });
  }

  handleChangeNeighborhood(event) {
    const target = event.target;
    const neighborhood = target.name.split('-')[1];
    const value = target.checked;

    this.setState({
      [neighborhood]: value
    });
  }

  render() {
    return (
      <form className='form-container' onSubmit={(event) => {
        this.props.handleSubmit(
          event,
          rentHopCodes,
          this.state
        );
      }
      }>

        <div className='form-container__row form-container__row--1'>
          <Form_neighborhoods
            handleChange={this.handleChangeNeighborhood}
            allNeighborhoods={this.state.selectedNeighborhoods} />
          <Form_prices handleChange={this.handleChange} />
        </div>

        <div className='form-container__row form-container__row--2'>
          <GoogleMap />
          <Form_amenities handleChange={this.handleChange} />
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