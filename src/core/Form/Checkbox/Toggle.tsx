import * as React from 'react';
import styled from 'styled-components';

import colors from '../../../helpers/colors';

interface LabelProps {
  options: {
    bgColor: string;
    ballColor: string;
    bgActiveColor: string;
    ballActiveColor: string;
  };
}

const Label = styled.label<LabelProps>`
  display: inline-table;
  cursor: pointer;

  input[type='checkbox'] {
    height: 1px;
    width: 1px;
    @supports (clip-path: circle(0%)) {
      clip-path: circle(0%);
    }

    @supports not (clip-path: circle(0%)) {
      clip: rect(0, 0, 0, 0);
    }
    margin: -1px;
    padding: 0;
    position: absolute;

    & + .toggle {
      width: 34px;
      height: 14px;
      background-color: ${props => props.options.bgColor};
      display: flex;
      align-items: center;
      border-radius: 10px;
      transform: translate3d(0, 0, 0);
      transition: all 0.2s ease-in-out;

      .toggle-ball {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background-color: ${props => props.options.ballColor};
        display: flex;
        transition: all 0.2s ease-in-out;
      }
    }

    &:checked + .toggle {
      background-color: ${props => props.options.bgActiveColor};
      .toggle-ball {
        background-color: ${props => props.options.ballActiveColor};
        transform: translate3d(80%, 0, 0);
      }
    }

    /* &:focus + span .toggle {
      transform: scale(1.1);
    }

    &:focus + span .toggle {
      transform: scale(1.1);
    } */
  }
`;

interface Props {
  style?: {};
  bgColor?: string;
  ballColor?: string;
  bgActiveColor?: string;
  ballActiveColor?: string;
}

function Checkbox({
  style,
  bgColor = colors.gray.toggleBg,
  ballColor = colors.gray.toggleBall,
  bgActiveColor = colors.blue.toggleBg,
  ballActiveColor = colors.blue.toggle,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & Props) {
  return (
    <Label
      style={{ ...style }}
      options={{ bgColor, ballColor, bgActiveColor, ballActiveColor }}
    >
      <input type="checkbox" {...rest} />
      <span className="toggle">
        <span className="toggle-ball" />
      </span>
    </Label>
  );
}

export default Checkbox;
