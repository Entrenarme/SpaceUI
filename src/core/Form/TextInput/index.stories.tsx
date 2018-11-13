import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { faUser } from '@fortawesome/pro-light-svg-icons';

import TextInput from './index';

storiesOf('Form/TextInput', module).add('Normal', () => (
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
    <TextInput label="Nombre" placeholder="Nombre" />
  </div>
));

storiesOf('Form/TextInput', module).add('With icon', () => (
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
    <TextInput label="Nombre" placeholder="Nombre" icon={faUser} />
  </div>
));
