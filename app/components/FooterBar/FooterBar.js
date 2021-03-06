/* global VERSION */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FooterBar.scss';

export default class FooterBar extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    // const { info, load } = this.props; // eslint-disable-line no-shadow
    // eslint-disable-next-line global-require
    /* eslint-disable */
    const certificateImg = require('./one.png');
    const quartileLogoImg = require('./../../components/FooterBar/logo.png');
    const version = 'v' + VERSION;
    return (
      <footer>
        <div className={'brand'}></div>
        <div className={'copyright'}>© Quartile 2019. All rights reserved. {version}</div>
        <section className={'center' + ' ' + 'a'}>
        <h4>Get in Touch</h4>
        <p>
        <a href="mailto:hello@quartile.io">hello@quartile.io</a><br/><br/>
        <a href="tel:+44-7500905701">+44 7500905701</a><br/><br/>
        Quartile Studios<br/>1 Lydalls<br/>Radnage Common Rd<br/>HP14 4DH<br/><br/>
        <br/>
        </p>
        </section>
        <section className={'center' + ' ' + 'b'}>
          <h4>Assistance</h4>
          <Link to="/contact">Contact</Link><br />
          {/* <Link to="/faq">FAQs</Link> */}
          <Link to="/careers">Careers</Link>
          <Link to="/privacy">Privacy Policy</Link><br/>
          <Link to="/gdpr">GDPR Compliance</Link><br/>
        </section>
        <section className={'social'}>
          <h4>Follow</h4>
          {/* <a href="https://www.instagram.com/quartile_io/" target="_blank">
            <svg viewBox="0 0 20 20">
              <path className={'st0'} d="M510,160c-2.7,0-3.1,0-4.1,0.1c-1.1,0-1.8,0.2-2.4,0.5c-0.7,0.3-1.2,0.6-1.8,1.2 c-0.6,0.6-0.9,1.1-1.2,1.8c-0.2,0.6-0.4,1.4-0.5,2.4c0,1.1-0.1,1.4-0.1,4.1c0,2.7,0,3.1,0.1,4.1c0,1.1,0.2,1.8,0.5,2.4 c0.3,0.7,0.6,1.2,1.2,1.8c0.6,0.6,1.1,0.9,1.8,1.2c0.6,0.2,1.4,0.4,2.4,0.5c1.1,0,1.4,0.1,4.1,0.1c2.7,0,3.1,0,4.1-0.1 c1.1,0,1.8-0.2,2.4-0.5c0.7-0.3,1.2-0.6,1.8-1.2c0.6-0.6,0.9-1.1,1.2-1.8c0.2-0.6,0.4-1.4,0.5-2.4c0-1.1,0.1-1.4,0.1-4.1 c0-2.7,0-3.1-0.1-4.1c0-1.1-0.2-1.8-0.5-2.4c-0.3-0.7-0.6-1.2-1.2-1.8c-0.6-0.6-1.1-0.9-1.8-1.2c-0.6-0.2-1.4-0.4-2.4-0.5 C513.1,160,512.7,160,510,160z M510,161.8c2.7,0,3,0,4,0.1c1,0,1.5,0.2,1.9,0.3c0.5,0.2,0.8,0.4,1.1,0.7c0.3,0.3,0.6,0.7,0.7,1.1 c0.1,0.4,0.3,0.9,0.3,1.9c0,1.1,0.1,1.4,0.1,4c0,2.7,0,3-0.1,4c0,1-0.2,1.5-0.3,1.9c-0.2,0.5-0.4,0.8-0.7,1.1 c-0.3,0.3-0.7,0.6-1.1,0.7c-0.4,0.1-0.9,0.3-1.9,0.3c-1.1,0-1.4,0.1-4,0.1c-2.7,0-3,0-4-0.1c-1,0-1.5-0.2-1.9-0.3 c-0.5-0.2-0.8-0.4-1.1-0.7c-0.3-0.3-0.6-0.7-0.7-1.1c-0.1-0.4-0.3-0.9-0.3-1.9c0-1.1-0.1-1.4-0.1-4c0-2.7,0-3,0.1-4 c0-1,0.2-1.5,0.3-1.9c0.2-0.5,0.4-0.8,0.7-1.1c0.3-0.3,0.7-0.6,1.1-0.7c0.4-0.1,0.9-0.3,1.9-0.3C507,161.8,507.3,161.8,510,161.8z M510,164.9c-2.8,0-5.1,2.3-5.1,5.1c0,2.8,2.3,5.1,5.1,5.1c2.8,0,5.1-2.3,5.1-5.1C515.1,167.2,512.8,164.9,510,164.9z M510,173.3 c-1.8,0-3.3-1.5-3.3-3.3c0-1.8,1.5-3.3,3.3-3.3c1.8,0,3.3,1.5,3.3,3.3C513.3,171.8,511.8,173.3,510,173.3z M516.5,164.7 c0,0.7-0.5,1.2-1.2,1.2c-0.7,0-1.2-0.5-1.2-1.2s0.5-1.2,1.2-1.2C516,163.5,516.5,164,516.5,164.7z"
                transform="translate(-500 -160)" />
            </svg>
          </a> */}
          <a href="https://twitter.com/HelloQuartile" target="_blank">
            <svg viewBox="0 0 20 16.7">
              <path className={'st0'} d="M320,166c-0.7,0.3-1.5,0.6-2.4,0.7c0.8-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1 c-0.7-0.8-1.8-1.3-3-1.3c-2.3,0-4.1,1.9-4.1,4.2c0,0.3,0,0.7,0.1,1c-3.4-0.2-6.4-1.8-8.5-4.4c-0.4,0.6-0.6,1.3-0.6,2.1 c0,1.5,0.7,2.7,1.8,3.5c-0.7,0-1.3-0.2-1.9-0.5v0.1c0,2,1.4,3.7,3.3,4.1c-0.3,0.1-0.7,0.1-1.1,0.1c-0.3,0-0.5,0-0.8-0.1 c0.5,1.7,2,2.9,3.8,2.9c-1.4,1.1-3.2,1.8-5.1,1.8c-0.3,0-0.7,0-1-0.1c1.8,1.2,4,1.9,6.3,1.9c7.5,0,11.7-6.4,11.7-12 c0-0.2,0-0.4,0-0.5C318.8,167.6,319.5,166.8,320,166"
                transform="translate(-300 -164)" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company-beta/27015742" target="_blank">
            <svg viewBox="0 0 14.52 14.49" xmlns="http://www.w3.org/2000/svg">
              <g fill="#fff">
                <path className={'st0'} d="m175.31 79.17h3v9.68h-3zm1.51-4.81a1.74 1.74 0 1 1 -1.75 1.74 1.74 1.74 0 0 1 1.75-1.74"
                  transform="translate(-175.07 -74.36)" />
                <path className={'st0'} d="m180.21 79.17h2.89v1.32a3.16 3.16 0 0 1 2.9-1.56c3 0 3.61 2 3.61 4.61v5.31h-3v-4.71c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"
                  transform="translate(-175.07 -74.36)" />
              </g>
            </svg>
          </a>
        </section>
      </footer>

    );
  }
}
