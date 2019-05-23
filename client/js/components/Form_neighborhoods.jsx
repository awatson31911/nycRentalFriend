import React, { Component } from 'react';
import ReactModal from 'react';
import PropTypes from 'prop-types';
import { rentHopCodes as allNeighborhoods } from '../utils/neighborhoodCodes';


export default class Form_neighborhoods extends Component {
  constructor() {
    super();
    this.state = {
      selectedBorough: '',
      showModal: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleClick(event) {
    const borough = event.target.name;
    console.log(event.target);

    this.setState({
      selectedBorough: borough,
      showModal:true
    });
  }

  render() {
    return (
      <div className='form-neighborhoods'>
        {
          Object.keys(allNeighborhoods).map((neighborhood) => {
            return (
              <div key={neighborhood}
                name={neighborhood}
                onClick={this.handleClick}>
                {neighborhood.toUpperCase()}
              </div>
            );
          })
        }
        {/* <ReactModal>
                   { const boroughNeighborhoods = allNeighborhoods[this.state.selectedBorough];
                    Object.keys(boroughNeighborhoods).map((neighborhood)=>{
                      return (
                         <label key={boroughNeighborhoods[neighborhood]}>
                          <input type='checkbox'
                            className='form-neighborhoods__list-item-2'
                            name={neighborhood}
                            onChange={this.props.handleChange} />
                        </label>
                      )
                    })}
          {neighborhoods[this.state.selectedBorough].map((neighborhood) => {
            return (
              <label key={neighborhood.code}>
                <input type='checkbox'
                  className='form-neighborhoods__list-item-2'
                  name={neighborhood.name}
                  onChange={this.props.handleChange} />
              </label>
            );
          })}
        </ReactModal> */}
      </div>
    );
  }
}


Form_neighborhoods.propTypes = {
  handleChange: PropTypes.func.isRequired
};