// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import H3 from './index';

const actions = {
  onClick: action('onClick'),
};

storiesOf('Text/H3', module).add('Normal', () => <H3>Header 3</H3>);

storiesOf('Text/H3', module).add('Small', () => <H3 size="s">Header 3</H3>);

storiesOf('Text/H3', module).add('Large', () => <H3 size="l">Header 3</H3>);

storiesOf('Text/H3', module).add('With color', () => (
  <H3 color="tomato">Header 3</H3>
));
