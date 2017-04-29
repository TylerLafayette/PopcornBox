import React, { Component } from 'react'

export default class Pane extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
