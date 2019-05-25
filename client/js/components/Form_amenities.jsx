import React from 'react';
import PropTypes from 'prop-types';


export default function Form_priceAmenities(props) {

  return (
    <div className='form-amenities'>
      <div className="form-amenities__list">
        Amenities:
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='isApartment'
            onChange={props.handleChange} />
          Apartment
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='isCondo'
            onChange={props.handleChange} />
          Condo
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='isCoOp'
            onChange={props.handleChange} />
          Co-op
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='hasElevator'
            onChange={props.handleChange} />
          Elevator
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='hasWasherDryerInUnit'
            onChange={props.handleChange} />
          Washer/Dryer in Unit
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='hasWasherDryerInBuilding'
            onChange={props.handleChange} />
          Washer/Dryer in Building
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='hasDishwasher'
            onChange={props.handleChange} />
          Dishwasher
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='hasPrivateOutdoorArea'
            onChange={props.handleChange} />
          Private Outdoor Area
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='hasSharedOutdoorArea'
            onChange={props.handleChange} />
          Shared Outdoor Area
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='hasDogs'
            onChange={props.handleChange} />
          Dogs Allowed
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='hasCats'
            onChange={props.handleChange} />
          Cats Allowed
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='hasFitnessGym'
            onChange={props.handleChange} />
          Fitness/Gym
        </label>
      </div>
    </div>

  );
}

Form_priceAmenities.propTypes = {
  handleChange: PropTypes.func.isRequired
};