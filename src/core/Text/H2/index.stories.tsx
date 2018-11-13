import * as React from 'react';
import { storiesOf } from '@storybook/react';

import H2 from './index';

storiesOf('Text/H2', module).add('Normal', () => <H2>Header 2</H2>);

storiesOf('Text/H2', module).add('Small', () => <H2 size="s">Header 2</H2>);

storiesOf('Text/H2', module).add('Large', () => <H2 size="l">Header 2</H2>);

storiesOf('Text/H2', module).add('With color', () => (
  <H2 color="tomato">Header 2</H2>
));
