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
    }}
  >
    <UnderlineTextField label="Nombre" />
  </div>
));
