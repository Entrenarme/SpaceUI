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
  border-radius: 50px;
  font-family: ${mainFont};
  color: ${colors.gray.dark};

  &:focus {
    outline: 0;
  }
`;

type Props = {
  type?: string,
  placeholder?: string,
  label: React.Node,
  labelColor?: string,
  style?: Object,
  rows?: number,
  cols?: number,
};

const TextArea = (props: Props) => {
  const {
    type,
    placeholder,
    label,
    labelColor,
    style,
    rows,
    cols,
    ...rest
  } = props;

  return (
    <div style={style}>
      {label ? <LabelInput options={{ labelColor }}>{label}</LabelInput> : null}
      <GlobalInputContainer>
        <ExtendedTextArea
          type={type}
          placeholder={placeholder}
          rows={rows}
          cols={cols}
        />
      </GlobalInputContainer>
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
