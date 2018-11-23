import * as React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinnerThird } from '@fortawesome/pro-light-svg-icons';

import colors from '../../helpers/colors';
import { mainFont } from '../../helpers/fonts';

interface StyledButtonProps {
  options: {
    outLined?: boolean;
    bgColor?: string;
    textColor?: string;
    icon?: JSX.Element;
    label?: JSX.Element | string;
    loading?: boolean;
    disabled?: boolean;
  };
}

const setBackgroundColor = (
  bgColor?: string,
  outLined?: boolean,
  disabled?: boolean,
) => {
  if (disabled && outLined) {
    return null;
  }

  if (disabled) {
    return colors.gray.disabledBackground;
  }

  if (bgColor && !outLined) {
    return bgColor;
  }

  return null;
};

const setTextColor = (textColor?: string, disabled?: boolean) => {
  if (disabled) {
    return colors.gray.text;
  }

  if (textColor) {
    return textColor;
  }

  return '#fff';
};

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
    !props.options.outLined && !props.options.bgColor && !props.options.disabled
      ? `linear-gradient(
      270deg,
      ${colors.buttonBackground.purpleGradient},
      ${colors.buttonBackground.pinkGradient}
    ); `
      : null};
  border: ${props => (props.options.outLined ? '2px solid' : null)};
  background-color: ${props =>
    setBackgroundColor(
      props.options.bgColor,
      props.options.outLined,
      props.options.disabled,
    )};
  background-repeat: no-repeat;
  color: ${props =>
    setTextColor(props.options.textColor, props.options.disabled)};
  cursor: ${props =>
    props.options.loading || props.options.disabled ? 'default' : 'pointer'};
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

const loadingSpin = keyframes`
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
`;

const loadingSpinAnimation = css`
  ${loadingSpin} 1s infinite
`;

interface ExtendedIconContainerProps {
  options: {
    icon?: JSX.Element;
    label?: JSX.Element | string;
    loading?: boolean;
  };
}

const ExtendedIconContainer = styled.div<ExtendedIconContainerProps>`
  position: ${props =>
    (props.options.icon || props.options.loading) && props.options.label
      ? 'absolute'
      : 'initial'};
  left: ${props =>
    (props.options.icon || props.options.loading) && props.options.label
      ? '15px'
      : null};
  animation: ${props => (props.options.loading ? loadingSpinAnimation : null)};
`;

interface Props {
  label?: JSX.Element | string;
  onClick?: (e?: any) => any | void;
  icon?: JSX.Element;
  bgColor?: string;
  outLined?: boolean;
  textColor?: string;
  children?: React.ReactNode;
  type?: string;
  disabled?: boolean;
  style?: {};
  className?: string;
  name?: string;
  loading?: boolean;
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
    loading,
    ...rest
  } = props;

  const renderButtonIcon = () => {
    if (loading) {
      return (
        <ExtendedIconContainer options={{ icon, label, loading }}>
          <FontAwesomeIcon
            icon={faSpinnerThird}
            color={textColor ? textColor : '#fff'}
            size="lg"
          />
        </ExtendedIconContainer>
      );
    }

    if (icon) {
      return (
        <ExtendedIconContainer options={{ icon, label }}>
          {icon}
        </ExtendedIconContainer>
      );
    }

    return null;
  };

  return (
    <StyledButton
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      options={{ icon, label, bgColor, outLined, textColor, loading, disabled }}
      {...rest}
    >
      {renderButtonIcon()}
      {children || label}
    </StyledButton>
  );
};

export default Button;
