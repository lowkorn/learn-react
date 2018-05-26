import React from 'react'

export default class CloseButton extends React.Component {
  render() {
    return (
      <button type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    )
  }
}