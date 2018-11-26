import * as React from 'react';
import styled from 'styled-components';

import { mainFont } from '../../../helpers/fonts';

const setFontSize = (size?: string) => {
  switch (size) {
    case 'l':
      return '28px';
    case 's':
      return '20px';
    default:
      return '24px';
  }
};

interface ExtendedH2Props {
  options: {
    size?: string;
    color?: string;
    textAlign?: string;
  };
}

const ExtendedH2 = styled.h2<ExtendedH2Props>`
  font-family: ${mainFont};
  font-size: ${props => setFontSize(props.options.size)};
  font-weight: 600;
  color: ${props => props.options.color};
  text-align: ${props =>
    props.options.textAlign ? props.options.textAlign : 'left'};
`;

type Props = {
  children: JSX.Element | string;
  color?: string;
  size?: 'l' | 'm' | 's';
  style?: Object;
  textAlign?: string;
};

const H2 = (props: Props) => {
  const { children, color, size, style, textAlign, ...rest } = props;

  return (
    <ExtendedH2 options={{ color, size, textAlign }} style={style} {...rest}>
      {children}
    </ExtendedH2>
  );
};

export default H2;
