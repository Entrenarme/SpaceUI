// @flow
import * as React from 'react';
import styled from 'styled-components';

import { mainFont, regularFont } from '../../../helpers/fonts';
import colors from '../../../helpers/colors';

const setFontSize = (size: string) => {
  switch (size) {
    case 'l':
      return '38px';
    case 's':
      return '30px';
    default:
      return '34px';
  }
};

const ExtendedH1 = styled.h1`
  font-family: ${mainFont};
  font-size: ${props => setFontSize(props.options.size)};
  font-weight: 700;
  color: ${props => props.options.color};
`;

type Props = {
  children: React.Node,
  color?: string,
  size?: 'l' | 'm' | 's',
};

const H1 = (props: Props) => {
  const { children, color, size } = props;

  return <ExtendedH1 options={{ color, size }}>{children}</ExtendedH1>;
};

export default H1;
