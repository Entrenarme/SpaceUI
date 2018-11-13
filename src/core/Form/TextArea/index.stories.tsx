import * as React from 'react';
import { storiesOf } from '@storybook/react';

import TextArea from './index';

storiesOf('Form/TextArea', module).add('Normal', () => (
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
    <TextArea label="Nombre" placeholder="Nombre" />
  </div>
));
