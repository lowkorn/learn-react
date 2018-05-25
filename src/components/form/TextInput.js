import React, {Component} from 'react';

export default class TextInput extends Component {
  
  // value() {
  //   return this.refs.textInput.value;
  // }

  // clear() {
  //   this.refs.textInput.value = '';
  // }

  render() {
    return (
        <input 
          ref="textInput"
          className={ `form-control  ${this.props.className}` }
          type={ `text ${this.props.type}` }
          placeholder={ this.props.placeholder } 
          // aria-label="Enter task" 
          // aria-describedby="basic-addon2" 
          value={this.props.value}
          onChange={ this.props.onChange }
          disabled={this.props.disabled || false}
        />
    )
  }
}