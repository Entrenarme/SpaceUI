// @flow
import * as React from 'react';
import styled from 'styled-components';

import { mainFont, regularFont } from '../../../helpers/fonts';
import colors from '../../../helpers/colors';

const setFontSize = (size: string) => {
  switch (size) {
    case 'l':
      return '18px';
    case 's':
      return '12px';
    default:
      return '15px';
  }
};

const ExtendedP = styled.p`
  font-family: ${props =>
    props.options.size === 's' ? regularFont : mainFont};
  font-size: ${props => setFontSize(props.options.size)};
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

const P = (props: Props) => {
  const { children, color, size, style, textAlign } = props;

  return (
    <ExtendedP options={{ color, size, textAlign }} style={style}>
      {children}
    </ExtendedP>
  );
};

export default P;
