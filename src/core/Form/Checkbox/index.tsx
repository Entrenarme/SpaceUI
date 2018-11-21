import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/pro-light-svg-icons';

import { regularFont } from '../../../helpers/fonts';

const Label = styled.label`
  color: white;
  display: inline-table;

  > span {
    display: flex;
    align-items: center;
    font-family: ${regularFont};
    font-size: 14px;
    font-weight: 500;
  }
  .check-square-icon {
    display: none;
    width: 24px;
    height: 24px;
    /* transition: transform 0.2s ease-in-out; */
  }
  .square-icon {
    display: inline-block;
    width: 24px;
    height: 24px;
    /* transition: transform 0.2s ease-in-out; */
  }
  .label {
    margin-left: 12px;
  }

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

    &:checked + span .square-icon {
      display: none;
    }

    &:checked + span .check-square-icon {
      display: inline-block;
    }

    /* &:focus + span .square-icon {
      transform: scale(1.1);
    }

    &:focus + span .check-square-icon {
      transform: scale(1.1);
    } */
  }
`;

interface Props {
  label?: string;
  style?: {};
}

function Checkbox({
  label,
  style,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & Props) {
  return (
    <Label style={{ ...style }}>
      <input type="checkbox" {...rest} />
      <span>
        <span className="square-icon">
          <FontAwesomeIcon
            icon={faSquare}
            style={{ width: '24px', height: '24px' }}
          />
        </span>
        <span className="check-square-icon">
          <FontAwesomeIcon
            icon={faCheckSquare}
            style={{ width: '24px', height: '24px' }}
          />
        </span>
        <span className="label">{label}</span>
      </span>
    </Label>
  );
}

export default Checkbox;
