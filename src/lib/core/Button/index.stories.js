// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Button', module).add('Default', () => (
  <Button label="Test text" onClick={() => console.log('hola')} />
));
