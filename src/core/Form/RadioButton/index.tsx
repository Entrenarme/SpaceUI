import * as React from 'react';
import styled from 'styled-components';

import { regularFont } from '../../../helpers/fonts';
import colors from '../../../helpers/colors';

const Label = styled.label`
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
    color: ${colors.gray.text};
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
      border: 5px solid #fff;
      box-shadow: 0 0 0 0.15em ${colors.gray.text};
    }
  }

  input[type='radio']:checked + span::before {
    box-shadow: 0 0 0 0.15em ${colors.blue.main};
    background-color: ${colors.blue.main};
  }
`;

interface Props {
  label: React.ReactNode;
}

function RadioButton({
  label,
  ...rest
}: Props & React.InputHTMLAttributes<any>) {
  return (
    <Label>
      <input type="radio" {...rest} />
      <span>{label}</span>
    </Label>
  );
}

export default RadioButton;
