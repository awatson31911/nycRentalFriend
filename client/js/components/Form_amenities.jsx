import React from 'react';
import PropTypes from 'prop-types';


export default function Form_priceAmenities(props) {

  return (
    <div className='form-amenities'>
      <label className='form-amenities__list'>
        Amenities:
        <label>
          <input type='checkbox'
            className='form-amenities__list-item'
            name='isApartment'
            onChange={props.handleChange} />
          Apartment
        </label>
        <label>
          <input type='checkbox'
            className='form-amenities__list-item'
            name='isCondo'
            onChange={props.handleChange} />
          Condo
        </label>
        <label>
          <input type='checkbox'
            className='form-amenities__list-item'
            name='isCoOp'
            onChange={props.handleChange} />
          Co-op
        </label>
        <label>
          <input type='checkbox'
            className='form-amenities__list-item'
            name='hasElevator'
            onChange={props.handleChange} />
          Elevator
        </label>
        <label>
          <input type='checkbox'
            className='form-amenities__list-item'
            name='hasWasherDryerInUnit'
            onChange={props.handleChange} />
          Washer/Dryer in Unit
        </label>
        <label>
          <input type='checkbox'
            className='form-amenities__list-item'
            name='hasWasherDryerInBuilding'
            onChange={props.handleChange} />
          Washer/Dryer in Building
        </label>
        <label>
          <input type='checkbox'
            className='form-amenities__list-item'
            name='hasDishwasher'
            onChange={props.handleChange} />
          Dishwasher
        </label>
        <label>
          <input type='checkbox'
            className='form-amenities__list-item'
            name='hasPrivateOutdoorArea'
            onChange={props.handleChange} />
          Private Outdoor Area
        </label>
        <label>
          <input type='checkbox'
            className='form-amenities__list-item'
            name='hasSharedOutdoorArea'
            onChange={props.handleChange} />
          Shared Outdoor Area
        </label>
        <label>
          <input type='checkbox'
            className='form-amenities__list-item'
            name='hasDogs'
            onChange={props.handleChange} />
          Dogs Allowed
        </label>
        <label>
          <input type='checkbox'
            className='form-amenities__list-item'
            name='hasCats'
            onChange={props.handleChange} />
          Cats Allowed
        </label>
        <label>
          <input type='checkbox'
            className='form-amenities__list-item'
            name='hasFitnessGym'
            onChange={props.handleChange} />
          Fitness/Gym
        </label>
      </label>
    </div>
  );
}

Form_priceAmenities.propTypes = {
  handleChange: PropTypes.func.isRequired
};