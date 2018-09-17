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

const ExtendedInput = styled.input`
  border: 1px solid ${colors.gray.light};
  width: ${props => (props.options.icon ? '260px' : '300px')};
  padding: ${props => (props.options.icon ? '10px' : '10px 10px 10px 15px')};
  border-radius: ${props =>
    props.options.icon ? '0px 50px 50px 0px' : '50px'};
  font-size: 14px;
  font-family: ${mainFont};
  color: ${colors.gray.dark};

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
  icon?: string,
  label: React.Node,
  labelColor?: string,
  name?: string,
  style?: Object,
  field: Object,
  form: Object,
};

const TextInput = (props: Props) => {
  const {
    type,
    placeholder,
    icon,
    label,
    labelColor,
    name,
    style,
    field,
    form,
    ...rest
  } = props;

  return (
    <div style={style}>
      <LabelInput options={{ labelColor }}>{label}</LabelInput>
      <GlobalInputContainer>
        {icon ? (
          <IconContainer>
            <FontAwesomeIcon icon={icon} color={colors.gray.dark} />
          </IconContainer>
        ) : null}
        <ExtendedInput
          type={type}
          placeholder={placeholder}
          name={name}
          options={{ icon }}
          {...field}
          {...rest}
        />
      </GlobalInputContainer>
      {field && form
        ? form.errors[field.name] && (
            <ErrorTextStyle>{form.errors[field.name]}</ErrorTextStyle>
          )
        : null}
    </div>
  );
};

TextInput.defaultProps = {
  type: 'text',
  placeholder: null,
  icon: '',
  labelColor: '',
  style: {},
};

export default TextInput;
