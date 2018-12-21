import * as React from 'react';
import styled from 'styled-components';

import { regularFont } from '../../../helpers/fonts';

const setFontSize = (size?: string) => {
  switch (size) {
    case 'l':
      return '18px';
    case 's':
      return '12px';
    default:
      return '16px';
  }
};

function getMargin(props: {
  options?: { margin?: string; halfMargin?: string };
}) {
  if (props.options) {
    if (props.options.margin) {
      const margin = props.options.margin;
      switch (margin) {
        case 'noMargin':
          return 'margin-top: 0; margin-bottom: 0;';
        case 'noTopMargin':
          return 'margin-top: 0;';
        case 'noBottomMargin':
          return 'margin-bottom: 0;';
        default:
          return '';
      }
    }

    if (props.options.halfMargin) {
      const margin = props.options.halfMargin;
      switch (margin) {
        case 'halfMargin':
          return 'margin-top: 0.5em; margin-bottom: 0.5em;';
        case 'halfTopMargin':
          return 'margin-top: 0.5em;';
        case 'halfBottomMargin':
          return 'margin-bottom: 0.5em;';
        default:
          return '';
      }
    }
  }
  return '';
}

interface ExtendedPProps {
  options: {
    size?: string;
    color?: string;
    textAlign?: string;
    margin?: string;
    halfMargin?: string;
    textTransform?: string;
    fontWeight?: number | string;
    fontFamily?: string;
  };
  as?: string;
}

const ExtendedP = styled.p<ExtendedPProps>`
  font-family: ${props =>
    props.options.fontFamily ? props.options.fontFamily : regularFont};
  font-size: ${props => setFontSize(props.options.size)};
  color: ${props => props.options.color};
  ${props => props.options && `text-transform: ${props.options.textTransform}`};
  ${props => getMargin(props)};
  font-weight: ${props =>
    props.options.fontWeight ? props.options.fontWeight : 400};
`;

type Props = {
  children: React.ReactNode;
  color?: string;
  size?: 'l' | 'm' | 's';
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  margin?: 'noMargin' | 'noTopMargin' | 'noBottomMargin' | '';
  halfMargin?: 'halfMargin' | 'halfTopMargin' | 'halfBottomMargin' | '';
  style?: Object;
  fontWeight?: number | string;
  fontFamily?: string;
  as?: string;
};

const P = (props: Props & React.HTMLAttributes<HTMLElement>) => {
  const {
    children,
    color,
    size,
    style,
    fontWeight,
    fontFamily,
    textTransform = 'none',
    margin = '',
    halfMargin = '',
    as,
    ...rest
  } = props;

  return (
    <ExtendedP
      as={as}
      options={{
        color,
        size,
        textTransform,
        margin,
        halfMargin,
        fontWeight,
        fontFamily,
      }}
      style={style}
      {...rest}
    >
      {children}
    </ExtendedP>
  );
};

export default P;
