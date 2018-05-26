import React from 'react';

export default class CheckboxWithLabel extends React.Component {
  
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
    )
  }
} 