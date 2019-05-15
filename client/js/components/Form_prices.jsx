import React from 'react';
import PropTypes from 'prop-types';


export default function Form_prices(props) {

  return (
    <div className='form-input-prices'>
      <label>
        Price Range:
        <input type='price'
          className='form-input-prices__item'
          name='priceMin'
          onChange={props.handleChange} />
        <input type='price'
          className='form-input-prices__item'
          name='priceMax'
          onChange={props.handleChange} />
      </label>
    </div>
  );
}

Form_prices.propTypes = {
  handleChange: PropTypes.func.isRequired
};