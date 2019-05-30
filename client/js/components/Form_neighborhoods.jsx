import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { rentHopCodes as allBoroughs } from '../utils/neighborhoodCodes';


export default class Form_neighborhoods extends Component {
  constructor() {
    super();
    this.state = {
      selectedBorough: '',
      showModal: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.getParentElement = this.getParentElement.bind(this);
  }

  getParentElement() {
    return document.querySelector('.form-neighborhood__borough-list');
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleClick(event) {
    const borough = event.target.getAttribute('name');

    this.setState({
      selectedBorough: borough,
      showModal: true
    });
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
        </div>
        {
          this.state.selectedBorough &&
          <ReactModal
            isOpen={true}
            contentLabel="NYC Borough and Neighborhood List"
            onRequestClose={this.handleCloseModal}
            className={`modal-${this.state.selectedBorough}`}
            overlayClassName="overlay"
            parentSelector={this.getParentElement}
          >
            {
              Object.keys(allBoroughs[this.state.selectedBorough]).map((neighborhood) => {
                return (
                  <label key={allBoroughs[this.state.selectedBorough][neighborhood]}>
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
        }
      </div>
    );
  }
}


Form_neighborhoods.propTypes = {
  handleChange: PropTypes.func.isRequired
};