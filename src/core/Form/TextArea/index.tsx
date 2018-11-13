import * as React from 'react';
import styled from 'styled-components';

import { regularFont } from '../../../helpers/fonts';
import colors from '../../../helpers/colors';

const GlobalInputContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;

interface LabelInputProps {
  options: {
    labelColor?: string;
  };
}

const LabelInput = styled.label<LabelInputProps>`
  font-size: 12px;
  font-family: ${regularFont};
  letter-spacing: 1.6px;
  text-transform: uppercase;
  font-weight: 500;
  margin-left: 5px;
  color: ${props =>
    props.options.labelColor ? props.options.labelColor : '#ffffff'};
`;

interface ExtendedTextAreaProps {
  options: {
    letterSpacing?: number;
  };
}

const ExtendedTextArea = styled.textarea<ExtendedTextAreaProps>`
  border: 1px solid ${colors.gray.light};
  font-size: 14px;
  width: 300px;
  padding: 10px 10px 10px 15px;
  border-radius: 20px;
  font-family: ${regularFont};
  letter-spacing: ${props =>
    props.options.letterSpacing ? props.options.letterSpacing : '1.6px'};
  color: ${colors.gray.dark};
  overflow: hidden;

  &:focus {
    outline: 0;
  }
`;

interface ErrorTextStyleProps {
  options: {
    textErrorColor?: string;
  };
}

const ErrorTextStyle = styled.div<ErrorTextStyleProps>`
  font-family: 'Nunito';
  font-size: 0.75rem;
  color: ${props =>
    props.options.textErrorColor
      ? props.options.textErrorColor
      : colors.red.error};
  margin: 5px 0px 10px 0px;
`;

interface Props {
  placeholder?: string;
  label: JSX.Element | string;
  labelColor?: string;
  style?: Object;
  name?: string;
  rows?: number;
  cols?: number;
  field?: {
    name?: string;
  };
  form?: {
    errors?: { [key: string]: string };
  };
  textErrorColor?: string;
  letterSpacing?: number;
}

const TextArea = (props: Props) => {
  const {
    placeholder,
    label,
    labelColor,
    style,
    name,
    rows,
    cols,
    textErrorColor,
    field,
    form,
    letterSpacing,
    ...rest
  } = props;

  return (
    <div style={style}>
      {label ? <LabelInput options={{ labelColor }}>{label}</LabelInput> : null}
      <GlobalInputContainer>
        <ExtendedTextArea
          placeholder={placeholder}
          options={{ letterSpacing }}
          name={name}
          rows={rows}
          cols={cols}
          {...field}
          {...rest}
        />
      </GlobalInputContainer>
      {form && field && form.errors && field.name
        ? form.errors[field.name] && (
            <ErrorTextStyle options={{ textErrorColor }}>
              {form.errors[field.name]}
            </ErrorTextStyle>
          )
        : null}
    </div>
  );
};

TextArea.defaultProps = {
  type: 'text',
  placeholder: null,
  labelColor: '',
  style: {},
};

export default TextArea;
