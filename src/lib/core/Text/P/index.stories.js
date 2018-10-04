// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import P from './index';

const actions = {
  onClick: action('onClick'),
};

storiesOf('Text/P', module).add('Normal', () => (
  <P>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
    tincidunt urna, vitae interdum quam. Donec semper vehicula mattis. Morbi
    convallis, nunc ut tincidunt suscipit, dolor nulla rhoncus massa, a luctus
    felis tortor sed odio.
  </P>
));

storiesOf('Text/P', module).add('Small', () => (
  <P size="s">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
    tincidunt urna, vitae interdum quam. Donec semper vehicula mattis. Morbi
    convallis, nunc ut tincidunt suscipit, dolor nulla rhoncus massa, a luctus
    felis tortor sed odio.
  </P>
));

storiesOf('Text/P', module).add('Large', () => (
  <P size="l">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
    tincidunt urna, vitae interdum quam. Donec semper vehicula mattis. Morbi
    convallis, nunc ut tincidunt suscipit, dolor nulla rhoncus massa, a luctus
    felis tortor sed odio.
  </P>
));

storiesOf('Text/P', module).add('With color', () => (
  <P color="tomato">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
    tincidunt urna, vitae interdum quam. Donec semper vehicula mattis. Morbi
    convallis, nunc ut tincidunt suscipit, dolor nulla rhoncus massa, a luctus
    felis tortor sed odio.
  </P>
));

storiesOf('Text/P', module).add('With custom font weight', () => (
  <P fontWeight={800}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
    tincidunt urna, vitae interdum quam. Donec semper vehicula mattis. Morbi
    convallis, nunc ut tincidunt suscipit, dolor nulla rhoncus massa, a luctus
    felis tortor sed odio.
  </P>
));

storiesOf('Text/P', module).add('With custom font family', () => (
  <P fontFamily="Nunito">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
    tincidunt urna, vitae interdum quam. Donec semper vehicula mattis. Morbi
    convallis, nunc ut tincidunt suscipit, dolor nulla rhoncus massa, a luctus
    felis tortor sed odio.
  </P>
));
