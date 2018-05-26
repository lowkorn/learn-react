import React from 'react';

export default class Checkbox extends React.Component {
  
  toggle() {
    this.props.onClick(this.refs.checkbox.checked);
  }

  render() {
    return (
      <span style={{ 'whiteSpace': 'pre-wrap', 'paddingRight': '20px' }}>
        <input type="checkbox" 
              ref="checkbox"
              checked={ this.props.checked}
              disabled={ this.props.disabled || false }
              onClick={ this.toggle.bind(this) } 
        />
      </span>
    )
  }
} 