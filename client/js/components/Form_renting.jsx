import React, { Component } from 'react';


export default class Form extends Component {

  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}