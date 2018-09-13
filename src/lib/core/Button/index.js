// @flow
import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import colors from '../../helpers/colors';
import { mainFont } from '../../helpers/fonts';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50px;
  padding: 10px 20px;
  border: 0;
  background: ${props => (props.options.outLined ? 'transparent' : null)};
  background-image: ${props =>
    !props.options.outLined && !props.options.bgColor
      ? `linear-gradient(
      to right,
      ${colors.buttonBackground.purpleGradient},
      ${colors.buttonBackground.pinkGradient}
    ); `
      : null};
  border: ${props => (props.options.outLined ? '2px solid' : null)};
  background-color: ${props =>
    props.options.bgColor && !props.options.outLined
      ? props.options.bgColor
      : null};
  color: ${props =>
    props.options.textColor ? props.options.textColor : '#fff'};
  cursor: pointer;
  font-family: ${mainFont};
  font-size: 14px;
  font-weight: 600;
  width: ${props =>
    props.options.icon && !props.options.label ? '48px' : '100%'};
  height: 48px;
  max-width: 300px;

  &:focus {
    outline: 0;
  }
`;

const ExtendedIcon = styled(FontAwesomeIcon)`
  position: ${props =>
    props.options.icon && props.options.label ? 'absolute' : 'initial'};
  left: ${props => (props.options.icon && props.options.label ? '15px' : null)};
`;

type Props = {
  label?: React.Node,
  onClick?: Function,
  icon?: React.Node,
  bgColor?: string,
  outLined?: boolean,
  textColor?: string,
};

const WelcomeText = (props: Props) => {
  const { label, onClick, icon, bgColor, outLined, textColor, ...rest } = props;

  return (
    <StyledButton
      onClick={onClick}
      options={{ icon, label, bgColor, outLined, textColor }}
      {...rest}
    >
      {icon ? (
        <ExtendedIcon icon={icon} options={{ icon, label }} size="lg" />
      ) : null}
      {label}
    </StyledButton>
  );
};

export default WelcomeText;
