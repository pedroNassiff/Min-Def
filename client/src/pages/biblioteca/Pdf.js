import React, { Component } from 'react';

export default class Pdf extends Component {
  render() {
    return (
      <object
      data={require('./docs/prueba1.pdf')}
      type="application/pdf"
      width="100%"
      height="100%"
      >

      </object>
    );
  }
}
