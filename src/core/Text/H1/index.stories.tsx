import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import H1 from './index';

const StyledH1 = styled(H1)`
  color: blue;
`;

storiesOf('Text/H1', module).add('Normal', () => <H1>Header 1</H1>);

storiesOf('Text/H1', module).add('Small', () => <H1 size="s">Header 1</H1>);

storiesOf('Text/H1', module).add('Large', () => <H1 size="l">Header 1</H1>);

storiesOf('Text/H1', module).add('With color', () => (
  <H1 color="tomato">Header 1</H1>
));

storiesOf('Text/Styled H1', module).add('With color', () => (
  <StyledH1>Header 1</StyledH1>
));
