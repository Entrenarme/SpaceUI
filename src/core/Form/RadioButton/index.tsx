import * as React from 'react';
import styled from 'styled-components';

import { regularFont } from '../../../helpers/fonts';
import colors from '../../../helpers/colors';

interface LabelProps {
  options: {
    outDefaultColor: string;
    outSelectedColor: string;
    bgColor: string;
    outDefaultColorDesktop: string;
    outSelectedColorDesktop: string;
    bgColorDesktop: string;
    negativeColor: boolean;
  };
}

const Label = styled.label<LabelProps>`
  display: flex;
  display: inline-table;
  cursor: pointer;

  input[type='radio'] {
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    position: absolute;
    @supports (clip-path: circle(0%)) {
      clip-path: circle(0%);
    }
    @supports not (clip-path: circle(0%)) {
      clip: rect(0, 0, 0, 0);
    }
  }

  > span {
    font-family: ${regularFont};
    font-size: 1rem;
    font-weight: 400;
    color: ${props =>
      props.options.negativeColor ? 'white' : colors.gray.text};
    white-space: nowrap;
    display: flex;
    align-items: center;

    &:before {
      content: '';
      width: 6px;
      height: 6px;
      box-sizing: content-box;
      display: inline-block;
      margin-right: 16px;
      border-radius: 100%;
      border: 5px solid
        ${props =>
          props.options.negativeColor
            ? props.options.bgColorDesktop
            : props.options.bgColor};
      box-shadow: 0 0 0 0.15em
        ${props =>
          props.options.negativeColor
            ? props.options.outDefaultColorDesktop
            : props.options.outDefaultColor};
      background-color: ${props =>
        props.options.negativeColor
          ? props.options.bgColorDesktop
          : props.options.bgColor};

      @media (min-width: 768px) {
        border: 5px solid
          ${props =>
            !props.options.negativeColor
              ? props.options.bgColorDesktop
              : props.options.bgColor};
        box-shadow: 0 0 0 0.15em
          ${props =>
            !props.options.negativeColor
              ? props.options.outDefaultColorDesktop
              : props.options.outDefaultColor};
        background-color: ${props =>
          !props.options.negativeColor
            ? props.options.bgColorDesktop
            : props.options.bgColor};
        margin-right: 10px;
      }
    }
  }

  input[type='radio']:checked + span::before {
    box-shadow: inset 0 0 0 1em ${props => props.options.outSelectedColor},
      0 0 0 0.15em ${props => props.options.outSelectedColor};

    @media (min-width: 768px) {
      box-shadow: inset 0 0 0 1em
          ${props => props.options.outSelectedColorDesktop},
        0 0 0 0.15em ${props => props.options.outSelectedColorDesktop};
    }
  }
`;

interface Props {
  label: React.ReactNode;
  outDefaultColor?: string;
  outSelectedColor?: string;
  bgColor?: string;
  outDefaultColorDesktop?: string;
  outSelectedColorDesktop?: string;
  bgColorDesktop?: string;
  negativeColor?: boolean;
}

function RadioButton({
  label,
  outDefaultColor = colors.gray.text,
  outSelectedColor = colors.blue.main,
  bgColor = 'white',
  outDefaultColorDesktop = colors.gray.text,
  outSelectedColorDesktop = colors.blue.main,
  bgColorDesktop = 'white',
  negativeColor = false,
  ...rest
}: Props & React.InputHTMLAttributes<any>) {
  return (
    <Label
      options={{
        outDefaultColor,
        outSelectedColor,
        bgColor,
        outDefaultColorDesktop,
        outSelectedColorDesktop,
        bgColorDesktop,
        negativeColor,
      }}
    >
      <input type="radio" {...rest} />
      <span>{label}</span>
    </Label>
  );
}

export default RadioButton;
