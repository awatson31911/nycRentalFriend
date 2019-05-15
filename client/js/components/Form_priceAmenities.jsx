import React from 'react';
import PropTypes from 'prop-types';


export default function Form_priceAmenities(props) {

  return (
    <form>
      <label>
        Price Range:
        <input type="price" name="price Min" />
        <input type="price" name="price Max" />
      </label>
      <label>
        Amenities:
        <label className='form-input-list'>
          <input type="checkbox" name="isApartment" onChange={props.handleChange} />
          Apartment
        </label>
        <label>
          <input type="checkbox" name="isCondo" onChange={props.handleChange} />
          Condo
        </label>
        <label>
          <input type="checkbox" name="isCoOp" onChange={props.handleChange} />
          Co-op
        </label>
        <label>
          <input type="checkbox" name="hasWasherDryeInUnit" onChange={props.handleChange} />
          Washer/Dryer in Unit
        </label>
        <label>
          <input type="checkbox" name="hasWasherDryerInBuilding" onChange={props.handleChange} />
          Washer/Dryer in Building
        </label>
        <label>
          <input type="checkbox" name="hasDishwasher" onChange={props.handleChange} />
          Dishwasher
        </label>
        <label>
          <input type="checkbox" name="hasOutdoorArea" onChange={props.handleChange} />
          Outdoor Area
        </label>
        <label>
          <input type="checkbox" name="hasPets" onChange={props.handleChange} />
          Pets
        </label>
        <label>
          <input type="checkbox" name="hasFitnessGym" onChange={props.handleChange} />
          Fitness/Gym
        </label>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

Form_priceAmenities.propTypes = {
  handleChange: PropTypes.func.isRequired
};