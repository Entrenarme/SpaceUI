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
    props.options.size === 's' ? regularFont : mainFont};
  font-size: ${props => setFontSize(props.options.size)};
  color: ${props => props.options.color};
  ${props => props.options && `text-transform: ${props.options.textTransform}`};
  ${props => getMargin(props)};
`;

type Props = {
  children: React.Node,
  color?: string,
  size?: 'l' | 'm' | 's',
  textTransform: 'uppercase' | 'lowercase' | 'capitalize',
  margin: 'noMargin' | 'noTopMargin' | 'noBottomMargin' | '',
  halfMargin: 'halfMargin' | 'halfTopMargin' | 'halfBottomMargin' | '',
};

const P = (props: Props) => {
  const { children, color, size, textTransform, margin, halfMargin } = props;

  return (
    <ExtendedP options={{ color, size, textTransform, margin, halfMargin }}>
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
