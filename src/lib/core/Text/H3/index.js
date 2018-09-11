// @flow
import * as React from 'react';
import styled from 'styled-components';

import { mainFont, regularFont } from '../../../helpers/fonts';
import colors from '../../../helpers/colors';

const setFontSize = (size: string) => {
  switch (size) {
    case 'l':
      return '26px';
    case 's':
      return '18px';
    default:
      return '22px';
  }
};

const ExtendedH3 = styled.h3`
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

const H3 = (props: Props) => {
  const { children, color, size } = props;

  return <ExtendedH3 options={{ color, size }}>{children}</ExtendedH3>;
};

export default H3;
