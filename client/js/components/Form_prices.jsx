import React from 'react';
import PropTypes from 'prop-types';


export default function Form_prices(props) {

  return (
    <div className='form-prices'>
      <label className='form-prices__list'>
        Price Range:
        <input type='text'
          className='form-prices__list-item'
          name='priceMin'
          onChange={props.handleChange} />
        <input type='text'
          className='form-prices__list-item'
          name='priceMax'
          onChange={props.handleChange} />
      </label>
    </div>
  );
}

Form_prices.propTypes = {
  handleChange: PropTypes.func.isRequired
};