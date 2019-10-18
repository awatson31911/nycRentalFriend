import React from 'react';
import PropTypes from 'prop-types';


export default function Form_mainCriteria({
  handleChange,
  handleFocus,
  handleKeyUp,
  amenities,
  amenities: {
    amenity_priceMax,
    amenity_priceMin,
    amenity_noFee
  }
}) {


  return (
    <div className='form--main-criteria'>

      <div className="form--prices">
        Price Range:

        <br />

        <label id='price-min-container'
          name='amenity_priceMin'
          className='position-rel'>
          MIN
          <input type='text'
            value={amenity_priceMin}
            name='amenity_priceMin'
            onChange={handleChange}
            onFocus={handleFocus}
            onKeyUp={handleKeyUp}
          />
        </label>

        <br />

        <label id='price-max-container'
          name='amenity_priceMax'
          className='position-rel'>
          MAX
          <input type='text'
            value={amenity_priceMax}
            name='amenity_priceMax'
            onChange={handleChange}
            onFocus={handleFocus}
            onKeyUp={handleKeyUp}
          />
        </label>

      </div>

      <div className="form--no-fee">
        <label>
          <input type="checkbox"
            value={amenity_noFee}
            name='amenity_noFee'
            onChange={handleChange}
          />
        </label>
        No Fee
      </div>

      <div className="form__bed">
        Number of Bedrooms:
        <br />
        {
          Object.keys(amenities).filter((amenity) => amenity.includes('numBed'))
            .map((numString) => {
              const num = Number(numString.slice(-1)) > 0
                ? numString.slice(-1)
                : 'Studio';

              return (
                <label key={`form__bed${num}`}>
                  <input type='checkbox'
                    className='form--main-criteria__list-item'
                    value={amenities[numString]}
                    name={numString}
                    onChange={handleChange}
                  />
                  {num}
                </label>
              );
            })
        }
      </div>

      <div className="form__bath">
        Number of Bathrooms:
        <br />
        {
          Object.keys(amenities).filter((amenity) => amenity.includes('numBath'))
            .map((numString) => {
              const num = numString.slice(-1);

              return (
                <label key={`form__bath${num}`}>
                  <input type='checkbox'
                    className='form--main-criteria__list-item'
                    value={amenities[numString]}
                    name={numString}
                    onChange={handleChange}
                  />
                  {num.toString()}
                </label>
              );
            })
        }
      </div>

    </div >
  );
}

Form_mainCriteria.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
  amenities: PropTypes.object.isRequired,
  amenity_priceMax: PropTypes.number.isRequired,
  amenity_priceMin: PropTypes.number.isRequired,
  amenity_numBedrooms1: PropTypes.object.isRequired,
  amenity_numBedrooms2: PropTypes.object.isRequired,
  amenity_numBedrooms3: PropTypes.object.isRequired,
  amenity_numBedrooms4: PropTypes.object.isRequired,
  amenity_numBathrooms1: PropTypes.object.isRequired,
  amenity_numBathrooms2: PropTypes.object.isRequired,
  amenity_numBathrooms3: PropTypes.object.isRequired,
  amenity_numBathrooms4: PropTypes.object.isRequired
};