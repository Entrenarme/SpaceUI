import * as React from 'react';
import styled from 'styled-components';

import colors from '../../helpers/colors';
import { mainFont } from '../../helpers/fonts';

interface StyledButtonProps {
  options: {
    outLined?: boolean;
    bgColor?: string;
    textColor?: string;
    icon?: JSX.Element;
    label?: JSX.Element | string;
  };
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50px;
  padding: ${props => (props.options.outLined ? '13px 20px' : '15px 20px')};
  border: 0;
  background: ${props => (props.options.outLined ? 'transparent' : null)};
  background-image: ${props =>
    !props.options.outLined && !props.options.bgColor
      ? `linear-gradient(
      270deg,
      ${colors.buttonBackground.purpleGradient},
      ${colors.buttonBackground.pinkGradient}
    ); `
      : null};
  border: ${props => (props.options.outLined ? '2px solid' : null)};
  background-color: ${props =>
    props.options.bgColor && !props.options.outLined
      ? props.options.bgColor
      : null};
  background-repeat: no-repeat;
  color: ${props =>
    props.options.textColor ? props.options.textColor : '#fff'};
  cursor: pointer;
  font-family: ${mainFont};
  font-size: 14px;
  font-weight: 600;
  width: ${props =>
    props.options.icon && !props.options.label ? '50px' : '100%'};
  max-width: 320px;

  &:focus {
    outline: 0;
  }
`;

interface ExtendedIconContainerProps {
  options: {
    icon?: JSX.Element;
    label?: JSX.Element | string;
  };
}

const ExtendedIconContainer = styled.div<ExtendedIconContainerProps>`
  position: ${props =>
    props.options.icon && props.options.label ? 'absolute' : 'initial'};
  left: ${props => (props.options.icon && props.options.label ? '15px' : null)};
`;

interface Props {
  label?: JSX.Element | string;
  onClick?: (e?: any) => any | void;
  icon?: JSX.Element;
  bgColor?: string;
  outLined?: boolean;
  textColor?: string;
  children?: JSX.Element;
  type?: string;
  disabled?: boolean;
  style?: {};
  className?: string;
  name?: string;
}

const Button = (props: Props) => {
  const {
    label,
    onClick,
    icon,
    bgColor,
    outLined,
    textColor,
    children,
    type,
    disabled,
    ...rest
  } = props;

  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={disabled}
      options={{ icon, label, bgColor, outLined, textColor }}
      {...rest}
    >
      {icon ? (
        <ExtendedIconContainer options={{ icon, label }}>
          {icon}
        </ExtendedIconContainer>
      ) : null}
      {children || label}
    </StyledButton>
  );
};

export default Button;
