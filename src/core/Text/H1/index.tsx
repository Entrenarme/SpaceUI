import * as React from 'react';
import styled from 'styled-components';

import { mainFont } from '../../../helpers/fonts';

const setFontSize = (size?: string) => {
  switch (size) {
    case 'l':
      return '38px';
    case 's':
      return '30px';
    default:
      return '34px';
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
          return 'margin-top: 0.42em; margin-bottom: 0.42em;';
        case 'halfTopMargin':
          return 'margin-top: 0.42em;';
        case 'halfBottomMargin':
          return 'margin-bottom: 0.42em;';
        default:
          return '';
      }
    }
  }
  return '';
}

interface ExtendedH1Props {
  options: {
    size?: string;
    color?: string;
    textAlign?: string;
    margin?: string;
    halfMargin?: string;
  };
}

const ExtendedH1 = styled.h1<ExtendedH1Props>`
  font-family: ${mainFont};
  font-size: ${props => setFontSize(props.options.size)};
  font-weight: 700;
  color: ${props => props.options.color};
  ${props => getMargin(props)};
  text-align: ${props =>
    props.options.textAlign ? props.options.textAlign : 'left'};
`;

interface Props {
  children: JSX.Element | string;
  color?: string;
  size?: 'l' | 'm' | 's';
  margin?: 'noMargin' | 'noTopMargin' | 'noBottomMargin' | '';
  halfMargin?: 'halfMargin' | 'halfTopMargin' | 'halfBottomMargin' | '';
  style?: {};
}

const H1 = (props: Props) => {
  const { children, color, size, margin, halfMargin, style } = props;

  return (
    <ExtendedH1 options={{ color, size, margin, halfMargin }} style={style}>
      {children}
    </ExtendedH1>
  );
};

H1.defaultProps = {
  margin: '',
  halfMargin: '',
};

export default H1;
