import * as React from 'react';
import styled from 'styled-components';

import { mainFont } from '../../../helpers/fonts';

const setFontSize = (size?: string) => {
  switch (size) {
    case 'l':
      return '26px';
    case 's':
      return '18px';
    default:
      return '22px';
  }
};

interface ExtendedH3Props {
  options: {
    size?: string;
    color?: string;
    textAlign?: string;
  };
}

const ExtendedH3 = styled.h3<ExtendedH3Props>`
  font-family: ${mainFont};
  font-size: ${props => setFontSize(props.options.size)};
  font-weight: 600;
  color: ${props => props.options.color};
  text-align: ${props =>
    props.options.textAlign ? props.options.textAlign : 'left'};
`;

interface Props {
  children: JSX.Element | string;
  color?: string;
  size?: 'l' | 'm' | 's';
  style?: Object;
  textAlign?: string;
}

const H3 = (props: Props) => {
  const { children, color, size, style, textAlign, ...rest } = props;

  return (
    <ExtendedH3 options={{ color, size, textAlign }} style={style} {...rest}>
      {children}
    </ExtendedH3>
  );
};

export default H3;
