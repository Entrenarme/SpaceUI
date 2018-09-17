// @flow
import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { mainFont, regularFont } from '../../../helpers/fonts';
import colors from '../../../helpers/colors';

const GlobalInputContainer = styled.div`
  display: flex;
  margin-top: 5px;
`;

const LabelInput = styled.label`
  font-size: 12px;
  font-family: ${mainFont};
  text-transform: uppercase;
  font-weight: 500;
  margin-left: 5px;
  color: ${props =>
    props.options.labelColor ? props.options.labelColor : '#ffffff'};
`;

const IconContainer = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.gray.light};
  border-radius: 50px 0px 0px 50px;
  background-color: ${colors.gray.light};
`;

const ExtendedTextArea = styled.textarea`
  border: 1px solid ${colors.gray.light};
  font-size: 14px;
  width: 300px;
  padding: 10px 10px 10px 15px;
  border-radius: 20px;
  font-family: ${mainFont};
  color: ${colors.gray.dark};
  overflow: hidden;

  &:focus {
    outline: 0;
  }
`;

const ErrorTextStyle = styled.div`
  font-family: 'PT Sans';
  font-size: 0.75rem;
  color: ${colors.red.error};
  margin: 5px 0px 10px 0px;
`;

type Props = {
  type?: string,
  placeholder?: string,
  label: React.Node,
  labelColor?: string,
  style?: Object,
  name?: string,
  rows?: number,
  cols?: number,
  field: Object,
  form: Object,
};

const TextArea = (props: Props) => {
  const {
    type,
    placeholder,
    label,
    labelColor,
    style,
    name,
    rows,
    cols,
    field,
    form: { touched, errors },
    ...rest
  } = props;

  return (
    <div style={style}>
      {label ? <LabelInput options={{ labelColor }}>{label}</LabelInput> : null}
      <GlobalInputContainer>
        <ExtendedTextArea
          type={type}
          placeholder={placeholder}
          name={name}
          rows={rows}
          cols={cols}
          {...field}
          {...rest}
        />
      </GlobalInputContainer>
      {errors[field.name] && (
        <ErrorTextStyle>{errors[field.name]}</ErrorTextStyle>
      )}
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
