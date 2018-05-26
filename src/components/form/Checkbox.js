import React from 'react';

export default class Checkbox extends React.Component {
  
  toggle() {
    this.props.onClick(this.refs.checkbox.checked);
  }

  render() {
    return (
      <div className={ this.props.className } onClick={this.toggle.bind(this)}>
        <input type="checkbox" ref="checkbox" checked={this.props.checked} />
        <label className="checkbox-label" style={{ 'whiteSpace': 'pre-wrap', 'paddingLeft': '10px'}}>
          {this.props.label}
        </label>
      </div>
      // <input type="checkbox" 
      //       value={ this.props.value } 
      //       disabled={ this.props.disabled || false }
      //       onClick={ this.props.onClick.bind(this, this.props.index) } 
      // />
    )
  }
} 