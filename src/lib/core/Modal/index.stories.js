// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dialog from './index';

const actions = {
  onClick: action('onClick'),
};

storiesOf('Dialog', module).add('Normal', () => <Dialog open>Header 1</Dialog>);
