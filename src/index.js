import styles from './index.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Naming from './0-Naming/index';
import Global from './1-Global';
import Composition from './2-Composition';
import CompositionFrom from './3-CompositionFrom';
import CompositionFromGlobal from './4-CompositionFromGlobal';
import Value from './5-Value';

export default class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <Naming />
        <hr className={styles.hr} />
        <Global />
        <hr className={styles.hr} />
        <Composition />
        <hr className={styles.hr} />
        <CompositionFrom />
        <hr className={styles.hr} />
        <CompositionFromGlobal />
        <hr className={styles.hr} />
        <Value />
        <hr className={styles.hr} />
      </div>
    );
  }

};

ReactDOM.render(
  <App/>,
  document.body.appendChild(document.createElement('div'))
);