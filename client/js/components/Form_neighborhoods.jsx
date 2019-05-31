import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { rentHopCodes as allBoroughs } from '../utils/neighborhoodCodes';


export default class Form_neighborhoods extends Component {
  constructor() {
    super();
    this.state = {
      selectedBorough: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.getParentElement = this.getParentElement.bind(this);
  }

  getParentElement() {
    return document.querySelector('.form-neighborhoods');
  }

  handleCloseModal() {
    //this.setState({ showModal: false });
  }

  handleClick(event) {
    const borough = event.target.getAttribute('name');
    const boroughModal = document.getElementsByClassName(`modal-${borough}`)[0];
    const prevBorough = this.state.selectedBorough
      ? document.getElementsByClassName(`modal-${this.state.selectedBorough}`)[0]
      : '';
    const newBorough = this.state.selectedBorough === borough ? '' : borough;
    const newModalState = newBorough.length ? 'inline-block' : 'none';
    this.setState(() => {
      return {
        selectedBorough: newBorough
      };
    });

    if (prevBorough)  {
      prevBorough.style.display = 'none';
    }

    boroughModal.style.display = newModalState;

  }

  render() {

    return (
      <div className='form-neighborhoods'>
        What Neighborhoods are you interested in?
        <div className='form-neighborhood__borough-list'>

          {
            Object.keys(allBoroughs).map((borough) => {
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
            Object.keys(allBoroughs).map((borough, i) => {
              return (
                <ReactModal
                  key={borough + i}
                  isOpen={true}
                  contentLabel="NYC Borough and Neighborhood List"
                  onRequestClose={this.handleCloseModal}
                  className={`modal-${borough}`}
                  overlayClassName="modal-overlay"
                  parentSelector={this.getParentElement}
                >
                  {
                    Object.keys(allBoroughs[borough]).map((neighborhood) => {
                      return (
                        <label key={allBoroughs[borough][neighborhood]}>
                          <input type='checkbox'
                            className='form-neighborhoods__list-item-2'
                            name={neighborhood}
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
  handleChange: PropTypes.func.isRequired
};