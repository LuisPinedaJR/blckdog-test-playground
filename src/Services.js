import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Services extends Component {
  static propTypes = {
    service: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    desc: PropTypes.string
  }

  static defaultProps = {
    desc: 'Hold on tight, Service not available yet'
  }

  render() {
    return (
        <div>
        <h3>{this.props.service.title}</h3>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}

