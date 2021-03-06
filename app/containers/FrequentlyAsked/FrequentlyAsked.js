import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class NotFound extends Component {
  render() {
    const styles = require('./FrequentlyAsked.scss');

    return (
      <div className={styles.containerNotFound}>
        <div id={styles.notFoundText}>
          <h1>FAQ!</h1>
          <p>The infamous error 404, these sadly happen!</p>
          <p>If the page has been moved or you found a deadlink...</p>
          <span>Please let us know, our front-end team might cry a little, but ultimately they will appreciate the info!</span>
        </div>
        <div id={styles.upset}>{''}</div>
      </div>
    );
  }
}
