import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Services extends Component {
  static propTypes = {
    service: PropTypes.object
  }
  render() {
    return (
        <div>
        <h3>{this.props.service.title}</h3>
        <p>{this.props.service.desc}</p>
      </div>
    )
  }
}

