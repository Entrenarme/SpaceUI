// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import UnderlineTextField from './index';

storiesOf('Form/UnderlineTextField', module).add('Normal', () => (
  <div
    style={{
      backgroundColor: 'blue',
      padding: '20px',
      backgroundImage: `linear-gradient(
    to bottom,
    #008DEB,
    #00EBFF`,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <UnderlineTextField label="Nombre" type="text" id="Nombre" />
    <UnderlineTextField label="Email" type="text" id="Email" />
    <UnderlineTextField label="Fecha" type="text" id="Fecha" />
  </div>
));
