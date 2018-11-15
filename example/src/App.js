import React, { Component } from 'react';
import styled from 'styled-components';

import DaySlider from './DaySlider.sample';

export default class App extends Component {
  render() {
    return (
      <div style={{ width: '100%', background: 'blue' }}>
        <div
          style={{ width: '80%', margin: '0 auto 0 auto', background: 'red' }}
        >
          <DaySlider />
        </div>
      </div>
    );
  }
}
