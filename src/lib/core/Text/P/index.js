// @flow
import * as React from 'react';
import styled from 'styled-components';

import { regularFont } from '../../../helpers/fonts';
import colors from '../../../helpers/colors';

const setFontSize = (size: string) => {
  switch (size) {
    case 'l':
      return '18px';
    case 's':
      return '12px';
    default:
      return '16px';
  }
};

function getMargin(props) {
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

const ExtendedP = styled.p`
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
  children: React.Node,
  color?: string,
  size?: 'l' | 'm' | 's',
  textTransform: 'uppercase' | 'lowercase' | 'capitalize',
  margin: 'noMargin' | 'noTopMargin' | 'noBottomMargin' | '',
  halfMargin: 'halfMargin' | 'halfTopMargin' | 'halfBottomMargin' | '',
  style?: Object,
  fontWeight?: number,
  fontFamily?: string,
};

const P = (props: Props) => {
  const {
    children,
    color,
    size,
    textTransform,
    margin,
    halfMargin,
    style,
    fontWeight,
    fontFamily,
  } = props;

  return (
    <ExtendedP
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
    >
      {children}
    </ExtendedP>
  );
};

P.defaultProps = {
  textTransform: 'none',
  margin: '',
  halfMargin: '',
};

export default P;
