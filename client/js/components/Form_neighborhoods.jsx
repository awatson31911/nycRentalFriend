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
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleClick(event) {
    const borough = event.target.getAttribute('name');
    console.log(event.target.getAttribute('name'));

    this.setState({
      selectedBorough: borough,
      showModal: true
    });
    console.log(this.state)
  }

  render() {

    return (
      <div className='form-neighborhoods'>
        {
          Object.keys(allBoroughs).map((borough) => {
            return (
              <li key={borough}
                name={borough}
                onClick={this.handleClick}>
                {borough.toUpperCase()}
              </li>
            );
          })
        }
        {
          this.state.selectedBorough &&
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="NYC Borough and Neighborhood List"
            onRequestClose={this.handleCloseModal}>
            <h1>Hello World</h1>
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