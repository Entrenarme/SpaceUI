import * as React from 'react';
import styled from 'styled-components';

import { regularFont } from '../../../helpers/fonts';

const Container = styled.div`
  .form__group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    font-family: ${regularFont};
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #fff;
    outline: 0;
    font-size: 14px;
    color: #fff;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }

  .form__field::placeholder {
    color: transparent;
  }

  .form__field:placeholder-shown ~ .form__label {
    font-size: 16px;
    cursor: text;
    top: 20px;
  }

  label,
  .form__field:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 12px;
    color: #fff;
  }

  .form__field:focus ~ .form__label {
    color: #fff;
  }

  .form__field:focus {
    padding-bottom: 6px;
    border-bottom: 2px solid #fff;
  }
`;

interface Props {
  type?: string;
  label: string;
  id?: string;
}

const UnderlineTextField = ({ type, label, ...rest }: Props) => {
  const labelProps: {
    className: string;
    for?: string;
  } = {
    className: 'form__label',
  };
  if (rest.id) {
    labelProps.for = rest.id;
  }
  return (
    <Container>
      <div className="form__group">
        <input
          type={type}
          className="form__field"
          placeholder={label}
          {...rest}
        />
        <label {...labelProps}>{label}</label>
      </div>
    </Container>
  );
};

export default UnderlineTextField;
