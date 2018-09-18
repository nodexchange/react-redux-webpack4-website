import React, { Component } from 'react';
import { BackgroundSky, ScrollToTopOnMount } from 'components';
import './Career.scss';

export default class NotFound extends Component {
  constructor(props) {
    super(props);
    console.log('here>>>');
  }
  render() {
    return (
      <div className={'containerCareers'}>
        <div id={'notFoundText'}>
          <h1>Careers</h1>
        </div>
        <ScrollToTopOnMount />
        <BackgroundSky />
        <div id={'upset'}>{''}</div>
      </div>
    );
  }
}
