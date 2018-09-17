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

const ExtendedH1 = styled.h1`
  font-family: ${mainFont};
  font-size: ${props => setFontSize(props.options.size)};
  font-weight: 700;
  color: ${props => props.options.color};
  ${props => getMargin(props)};
  text-align: ${props =>
    props.options.textAlign ? props.options.textAlign : 'left'};
`;

type Props = {
  children: React.Node,
  color?: string,
  size?: 'l' | 'm' | 's',
  margin: 'noMargin' | 'noTopMargin' | 'noBottomMargin' | '',
  halfMargin: 'halfMargin' | 'halfTopMargin' | 'halfBottomMargin' | '',
};

const H1 = (props: Props) => {
  const { children, color, size, margin, halfMargin } = props;

  return (
    <ExtendedH1 options={{ color, size, margin, halfMargin }}>
      {children}
    </ExtendedH1>
  );
};

H1.defaultProps = {
  margin: '',
  halfMargin: '',
};

export default H1;
