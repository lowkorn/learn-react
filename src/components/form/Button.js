import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <button 
        className={ `btn ${ this.props.className }` }
        type={ this.props.type }
        onClick={ this.props.onClick }
        disabled={ this.props.disabled }
      >
        { this.props.buttonName }
      </button>
    )
  }
}