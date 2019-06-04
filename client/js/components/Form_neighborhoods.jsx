import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { streetEasyCodes as allNeighborhoods } from '../utils/neighborhoodCodes';


export default class Form_neighborhoods extends Component {
  constructor() {
    super();
    this.state = {
      selectedBorough: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.getParentElement = this.getParentElement.bind(this);
  }

  getParentElement() {
    return document.querySelector('.form-neighborhoods');
  }

  handleSelectAll() {

  }

  handleClick(event) {
    const borough = event.target.getAttribute('name');
    const boroughModal = document.getElementsByClassName(`modal-${borough}`)[0];
    const prevBorough = this.state.selectedBorough
      ? document.getElementsByClassName(`modal-${this.state.selectedBorough}`)[0]
      : '';
    const newBorough = this.state.selectedBorough === borough ? '' : borough;
    const newModalState = newBorough.length ? 'flex' : 'none';
    this.setState(() => {
      return {
        selectedBorough: newBorough
      };
    });

    if (prevBorough) {
      prevBorough.style.display = 'none';
    }

    boroughModal.style.display = newModalState;

  }

  render() {
    const allBoroughs = Object.keys(allNeighborhoods);
    
    return (
      <div className='form-neighborhoods'>
        What Neighborhoods are you interested in?
        <div className='form-neighborhood__borough-list'>

          {
            allBoroughs.map((borough) => {
              return (
                <div key={borough}
                  className='form-neighborhood__borough-list-item'
                  name={borough}
                  onClick={this.handleClick}>
                  {borough.toUpperCase()}
                </div>
              );
            })
          }

          {
            allBoroughs.map((borough, i) => {
              return (
                <ReactModal
                  key={borough + i.toString()}
                  isOpen={true}
                  contentLabel="NYC Borough and Neighborhood List"
                  className={`modal modal-${borough}`}
                  overlayClassName="modal-overlay"
                  parentSelector={this.getParentElement}
                >
                  <div className='form-neighborhoods__all-behavior'>
                    <a className='form-neighborhoods--select-all'
                      onClick={true}
                    >
                      Select All
                    </a>

                    <span style={{ color: '#bbbbbb' }}>&nbsp;|&nbsp;</span>

                    <a className='form-neighborhoods--clear-all'
                      onClick={true}
                    >
                      Clear
                    </a>
                  </div>

                  { //console.log(borough, allNeighborhoods, allNeighborhoods[borough], allNeighborhoods[borough].boroughNeighborhoods)
                    Object.keys(allNeighborhoods[borough]).map((neighborhood, i) => {
                      return (
                        <label key={neighborhood+i.toString()}>
                          <input type='checkbox'
                            className='form-neighborhoods__list-item-2'
                            name={`${borough}-${neighborhood}`}
                            onChange={this.props.handleChange} />
                          {neighborhood}
                        </label>
                      );
                    })
                  }
                </ReactModal>
              );
            })
          }

        </div>

      </div >
    );
  }
}


Form_neighborhoods.propTypes = {
  handleChange: PropTypes.func.isRequired,
  allNeighborhoods: PropTypes.object.isRequired
};