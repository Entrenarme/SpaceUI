import * as React from 'react';
import styled from 'styled-components';

import { regularFont } from '../../../helpers/fonts';

const Label = styled.label`
  margin-top: 25px;
  width: 100%;
  font-family: ${regularFont};
  position: relative;

  .focused {
    transform: translate3d(0, -30px, 0);
    font-size: 10px;
  }

  span {
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    font-size: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: 0.3s;
  }

  input {
    width: 100%;
    border: none;
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    padding-bottom: 5px;
    font-weight: 600;
    color: white;
    font-size: 14px;
    font-family: ${regularFont};
  }
`;

interface Props {
  label: string;
}

interface State {
  focused: boolean;
}

class UnderlineTextField extends React.Component<
  Props & React.InputHTMLAttributes<HTMLInputElement>,
  State
> {
  state = {
    focused: false,
  };

  onFocus = (rest: any) => (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ focused: true });
    if (rest && rest.onFocus) {
      rest.onFocus(e);
    }
  };

  onBlur = (rest: any) => (e: React.SyntheticEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) {
      this.setState({ focused: false });
    }
    if (rest && rest.onBlur) {
      rest.onBlur(e);
    }
  };

  render() {
    const { label, ...rest } = this.props;
    const { focused } = this.state;

    return (
      <Label>
        <input
          {...rest}
          onFocus={this.onFocus(rest)}
          onBlur={this.onBlur(rest)}
        />
        <span className={focused || rest.value ? 'focused' : ''}>{label}</span>
      </Label>
    );
  }
}

export default UnderlineTextField;
