import React from 'react';
import PropTypes from 'prop-types';


export default function Form_priceAmenities({
  handleChange,
  amenities: { amenity_isApartment,
    amenity_isCondo,
    amenity_isCoOp,
    amenity_hasElevator,
    amenity_hasWasherDryerInUnit,
    amenity_hasWasherDryerInBuilding,
    amenity_hasDishwasher,
    amenity_hasSharedOutdoorArea,
    amenity_hasPrivateOutdoorArea,
    amenity_hasDogs,
    amenity_hasCats,
    amenity_hasFitnessGym }
}) {

  return (
    <div className='form-amenities'>
      <div className='form-amenities__list'>
        Amenities:
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='amenity_isApartment'
            value={amenity_isApartment}
            onChange={handleChange} />
          Apartment
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='amenity_isCondo'
            value={amenity_isCondo}
            onChange={handleChange} />
          Condo
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='amenity_isCoOp'
            value={amenity_isCoOp}
            onChange={handleChange} />
          Co-op
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='amenity_hasElevator'
            value={amenity_hasElevator}
            onChange={handleChange} />
          Elevator
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='amenity_hasWasherDryerInUnit'
            value={amenity_hasWasherDryerInUnit}
            onChange={handleChange} />
          Washer/Dryer in Unit
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='amenity_hasWasherDryerInBuilding'
            value={amenity_hasWasherDryerInBuilding}
            onChange={handleChange} />
          Washer/Dryer in Building
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='amenity_hasDishwasher'
            value={amenity_hasDishwasher}
            onChange={handleChange} />
          Dishwasher
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='amenity_hasPrivateOutdoorArea'
            value={amenity_hasPrivateOutdoorArea}
            onChange={handleChange} />
          Private Outdoor Area
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='amenity_hasSharedOutdoorArea'
            value={amenity_hasSharedOutdoorArea}
            onChange={handleChange} />
          Shared Outdoor Area
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='amenity_hasDogs'
            value={amenity_hasDogs}
            onChange={handleChange} />
          Dogs Allowed
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='amenity_hasCats'
            value={amenity_hasCats}
            onChange={handleChange} />
          Cats Allowed
        </label>
        <label className='form-amenities__list-item'>
          <input type='checkbox'
            name='amenity_hasFitnessGym'
            value={amenity_hasFitnessGym}
            onChange={handleChange} />
          Fitness/Gym
        </label>
      </div>
    </div>

  );
}

Form_priceAmenities.propTypes = {
  handleChange: PropTypes.func.isRequired,
  amenities: PropTypes.object.isRequired,
  amenity_numBedrooms: PropTypes.bool.isRequired,
  amenity_numBathrooms: PropTypes.bool.isRequired,
  amenity_isApartment: PropTypes.bool.isRequired,
  amenity_isCondo: PropTypes.bool.isRequired,
  amenity_isCoOp: PropTypes.bool.isRequired,
  amenity_hasElevator: PropTypes.bool.isRequired,
  amenity_hasWasherDryerInUnit: PropTypes.bool.isRequired,
  amenity_hasWasherDryerInBuilding: PropTypes.bool.isRequired,
  amenity_hasDishwasher: PropTypes.bool.isRequired,
  amenity_hasSharedOutdoorArea: PropTypes.bool.isRequired,
  amenity_hasPrivateOutdoorArea: PropTypes.bool.isRequired,
  amenity_hasDogs: PropTypes.bool.isRequired,
  amenity_hasCats: PropTypes.bool.isRequired,
  amenity_hasFitnessGym: PropTypes.bool.isRequired
};