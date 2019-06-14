import React from 'react';
import PropTypes from 'prop-types';


export default function Form_prices({
  handleChange,
  handleFocus,
  amenities,
  amenities: {
    amenity_priceMax,
    amenity_priceMin
  }
}) {

  
  return (
    <div className='form--main-criteria'>

      <div className="form--prices">
        Price Range:
        <br />

        <div>

          <label id='price-min-container' className='position-rel'>
            MIN
            <input type='text'
              value={amenity_priceMin}
              name='amenity_priceMin'
              onChange={handleChange}
              onFocus={handleFocus}
              //onBlur={handleFocus}
            />
          </label>


        </div>

        <br />

        <label id= 'price-max-container' className='position-rel'>
          MAX
          <input type='text'
            value={amenity_priceMax}
            name='amenity_priceMax'
            onChange={handleChange}
            onFocus={handleFocus}
            //onBlur={handleFocus}
          />
        </label>

      </div>

      <div className="form__bed">
        Number of Bedrooms:
        <br />
        {
          Object.keys(amenities).filter((amenity) => amenity.includes('numBed'))
            .map((numString) => {
              const num = numString.slice(-1);

              return (
                <label key={`form__bed${num}`}>
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

Form_prices.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
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