import React, { Component } from 'react';


export default class MapContainer extends Component () {
  constructor() {
    super();
    
  }

  render() {
    return (
      this.props.children
    );
  }
}

