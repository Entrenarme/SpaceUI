// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { faUser } from '@fortawesome/pro-light-svg-icons';

import TextArea from './index';

const actions = {
  onClick: action('onClick'),
};

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
