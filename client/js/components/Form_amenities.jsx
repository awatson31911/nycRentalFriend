import React from 'react';
import PropTypes from 'prop-types';


export default function Form_priceAmenities(props) {

  return (
    <div className='form-input-amenities'>
      <label>
        Amenities:
        <label>
          <input type='checkbox'
            className='form-input-amenities__item'
            name='isApartment'
            onChange={props.handleChange} />
          Apartment
        </label>
        <label>
          <input type='checkbox'
            className='form-input-amenities__item'
            name='isCondo'
            onChange={props.handleChange} />
          Condo
        </label>
        <label>
          <input type='checkbox'
            className='form-input-amenities__item'
            name='isCoOp'
            onChange={props.handleChange} />
          Co-op
        </label>
        <label>
          <input type='checkbox'
            className='form-input-amenities__item'
            name='hasWasherDryerInUnit'
            onChange={props.handleChange} />
          Washer/Dryer in Unit
        </label>
        <label>
          <input type='checkbox'
            className='form-input-amenities__item'
            name='hasWasherDryerInBuilding'
            onChange={props.handleChange} />
          Washer/Dryer in Building
        </label>
        <label>
          <input type='checkbox'
            className='form-input-amenities__item'
            name='hasDishwasher'
            onChange={props.handleChange} />
          Dishwasher
        </label>
        <label>
          <input type='checkbox'
            className='form-input-amenities__item'
            name='hasOutdoorArea'
            onChange={props.handleChange} />
          Outdoor Area
        </label>
        <label>
          <input type='checkbox'
            className='form-input-amenities__item'
            name='hasPets'
            onChange={props.handleChange} />
          Pets
        </label>
        <label>
          <input type='checkbox'
            className='form-input-amenities__item'
            name='hasFitnessGym'
            onChange={props.handleChange} />
          Fitness/Gym
        </label>
      </label>
      <input type='submit' value='Submit' />
    </div>
  );
}

Form_priceAmenities.propTypes = {
  handleChange: PropTypes.func.isRequired
};