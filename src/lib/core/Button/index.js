// @flow
import * as React from 'react';
import styled from 'styled-components';

import colors from '../../helpers/colors';
import { mainFont } from '../../helpers/fonts';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50px;
  padding: 15px 20px;
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
    props.options.icon && !props.options.label ? '50px' : '100%'};
  max-width: 320px;

  &:focus {
    outline: 0;
  }
`;

const ExtendedIconContainer = styled.div`
  position: ${props =>
    props.options.icon && props.options.label ? 'absolute' : 'initial'};
  left: ${props => (props.options.icon && props.options.label ? '15px' : null)};
`;

const GlobalInputContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;

const IconContainer = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid ${colors.gray.light};
  border-radius: 50px 0px 0px 50px;
  background-color: ${colors.gray.light};
`;

const ExtendedButton = styled.button`
  display: flex;
  padding-left: 15px !important;
  cursor: pointer;
  border: 1px solid ${colors.gray.light};
  width: 260px;
  padding: 10px;
  border-radius: 0px 50px 50px 0px;
  font-size: 14px;
  font-family: ${mainFont};
  color: ${colors.gray.dark};
  background-color: #fff;
  margin: 0;

  &:focus {
    outline: 0;
  }
`;

type Props = {
  label?: React.Node,
  onClick?: Function,
  icon?: React.Node,
  bgColor?: string,
  outLined?: boolean,
  textColor?: string,
  children: React.Node,
  type?: string,
  disabled?: boolean,
  fixedIcon?: boolean,
};

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
    containerIcon,
    fixedIcon,
    ...rest
  } = props;

  if (fixedIcon) {
    return (
      <GlobalInputContainer>
        {icon ? <IconContainer onClick={onClick}>{icon}</IconContainer> : null}
        <ExtendedButton onClick={onClick} {...rest}>
          {children || label}
        </ExtendedButton>
      </GlobalInputContainer>
    );
  }

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
