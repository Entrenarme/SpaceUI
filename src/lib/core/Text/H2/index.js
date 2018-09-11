// @flow
import * as React from 'react';
import styled from 'styled-components';

import { mainFont, regularFont } from '../../../helpers/fonts';
import colors from '../../../helpers/colors';

const setFontSize = (size: string) => {
  switch (size) {
    case 'l':
      return '28px';
    case 's':
      return '20px';
    default:
      return '24px';
  }
};

const ExtendedH2 = styled.h2`
  font-family: ${mainFont};
  font-size: ${props => setFontSize(props.options.size)};
  font-weight: 600;
  color: ${props => props.options.color};
`;

type Props = {
  children: React.Node,
  color?: string,
  size?: 'l' | 'm' | 's',
};

const H2 = (props: Props) => {
  const { children, color, size } = props;

  return <ExtendedH2 options={{ color, size }}>{children}</ExtendedH2>;
};

export default H2;
