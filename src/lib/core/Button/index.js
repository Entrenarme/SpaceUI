// @flow
import * as React from 'react';
import styled from 'styled-components';

import colors from '../../helpers/colors';
import { mainFont } from '../../helpers/fonts';

const StyledButton = styled.button`
  position: relative;
  border-radius: 50px;
  padding: 10px 20px;
  border: 0;
  background-image: linear-gradient(
    to right,
    ${colors.buttonBackground.purpleGradient},
    ${colors.buttonBackground.pinkGradient}
  );
  color: #fff;
  cursor: pointer;
  font-family: ${mainFont};
  font-size: 1rem;
  font-weight: 600;
  width: 300px;

  &:focus {
    outline: 0;
  }
`;

type Props = {
  label: string,
  onClick?: Function,
};

const WelcomeText = (props: Props) => {
  const { label, onClick } = props;

  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default WelcomeText;
