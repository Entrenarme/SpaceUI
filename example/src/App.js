import React, { Component } from 'react';
import styled from 'styled-components';

import { Dialog, Button } from 'spacefit-ui';

export default class App extends Component {
  render() {
    console.log('Dialog', Dialog);
    console.log('Button', Button);
    return (
      <Dialog open={true} onClose={() => {}}>
        hola!!
      </Dialog>
    );
  }
}
