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
  text-align: ${props =>
    props.options.textAlign ? props.options.textAlign : 'left'};
`;

type Props = {
  children: React.Node,
  color?: string,
  size?: 'l' | 'm' | 's',
  style?: Object,
  textAlign?: string,
};

const H1 = (props: Props) => {
  const { children, color, size, style, textAlign } = props;

  return (
    <ExtendedH1 options={{ color, size, textAlign }} style={style}>
      {children}
    </ExtendedH1>
  );
};

export default H1;
